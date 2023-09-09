import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements AfterViewInit {
  @ViewChild('form', { static: false }) form: HTMLFormElement;
  @ViewChild('nameFieldElement', { static: false })
  nameFieldElementRef: ElementRef;
  @ViewChild('emailFieldElement', { static: false })
  emailFieldElementRef: ElementRef;
  @ViewChild('messageFieldElement', { static: false })
  messageFieldElementRef: ElementRef;
  @ViewChild('sendButton', { static: false })
  sendButtonRef: ElementRef;

  nameField;
  emailField;
  messageField;
  sendButton;
  emailWasSent = false;

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

  ngAfterViewInit() {
    this.nameField = this.nameFieldElementRef.nativeElement;
    this.emailField = this.emailFieldElementRef.nativeElement;
    this.messageField = this.messageFieldElementRef.nativeElement;
    this.sendButton = this.sendButtonRef.nativeElement;
  }

  async sendMail() {
    this.disableForm();
    // this.checkData();
    let formData = this.getData();
    await this.sendData(formData);
    this.resetForm();
    this.enableForm();
    this.showSucessMessage();
  }

  disableForm() {
    this.nameField.disabled = true;
    this.emailField.disabled = true;
    this.messageField.disabled = true;
    this.sendButton.disabled = true;
  }

  checkData() {
    //this.checkNameField();
    //this.checkEmailField();
    //this.checkMessageField();
  }

  checkNameField() {}

  getData() {
    let formData = new FormData();
    formData.append('name', this.nameField.value);
    formData.append('email', this.emailField.value);
    formData.append('message', this.messageField.value);
    return formData;
  }

  async sendData(formData) {
    fetch(
      'https://laura-hesidenz.developerakademie.net/send_mail/send_mail.php',
      {
        method: 'post',
        body: formData,
      }
    );
  }

  enableForm() {
    this.nameField.disabled = false;
    this.emailField.disabled = false;
    this.messageField.disabled = false;
    this.sendButton.disabled = false;
  }

  resetForm() {
    this.nameField.value = '';
    this.emailField.value = '';
    this.messageField.value = '';
  }

  showSucessMessage() {
    this.emailWasSent = true;

    setTimeout(() => {
      this.emailWasSent = false;
    }, 3000);
  }
}
