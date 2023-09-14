import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements AfterViewInit {
  nameField;
  emailField;
  messageField;
  nameFieldIsValid;
  emailFieldIsValid;
  messageFieldIsValid;
  sendButton;
  emailWasSent = false;
  isLoading = false;

  @ViewChild('sendButton', { static: false })
  sendButtonRef: ElementRef;

  ngAfterViewInit() {
    this.nameField = this.contactForm.get('nameForm');
    this.emailField = this.contactForm.get('emailForm');
    this.messageField = this.contactForm.get('messageForm');
    this.sendButton = this.sendButtonRef.nativeElement;
  }

  contactForm = new FormGroup({
    nameForm: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    emailForm: new FormControl('', [Validators.required, Validators.email]),
    messageForm: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
    ]),
  });

  async sendingMail() {
    this.isLoading = true;
    this.contactForm.disable();
    let formData = this.getData();
    await this.sendData(formData);
    await this.showSucessMessage();
    this.contactForm.enable();
    this.contactForm.reset();
    this.isLoading = false;
  }

  getData() {
    let formData = new FormData();
    formData.append('name', this.nameField.value);
    formData.append('email', this.emailField.value);
    formData.append('message', this.messageField.value);
    return formData;
  }

  checkInputField(inputField, inputValidVariable) {
    if (inputField?.invalid && (inputField?.dirty || inputField?.touched)) {
      this[inputValidVariable] = false;
    } else {
      this[inputValidVariable] = true;
    }
  }

  async sendData(formData) {
    await fetch(
      'https://laura-hesidenz.developerakademie.net/send_mail/send_mail.php',
      {
        method: 'post',
        body: formData,
      }
    );
  }

  async showSucessMessage() {
    this.emailWasSent = true;
    setTimeout(() => {
      this.emailWasSent = false;
    }, 2000);
  }
  /*
  async sendMail() {
    this.disableForm();
    // this.checkData();
    let formData = this.getData();
    await this.sendData(formData);
    this.resetForm();
    this.enableForm();
    this.showSucessMessage();
  }
  

  checkData() {
    //this.checkNameField();
    //this.checkEmailField();
    //this.checkMessageField();
  }
  */
}
