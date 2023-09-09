import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

let nameField: HTMLInputElement;
let emailField: HTMLInputElement;
let messageField: HTMLInputElement;
let sendButton: HTMLButtonElement;

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

  ngAfterViewInit() {
    nameField = this.nameFieldElementRef.nativeElement;
    emailField = this.emailFieldElementRef.nativeElement;
    messageField = this.messageFieldElementRef.nativeElement;
    sendButton = this.sendButtonRef.nativeElement;
  }

  async sendMail() {
    this.disableForm();
    let formData = this.getData();
    await this.sendData(formData);
    this.resetForm();
    this.enableForm();
  }

  disableForm() {
    nameField.disabled = true;
    emailField.disabled = true;
    messageField.disabled = true;
    sendButton.disabled = true;
  }

  getData() {
    let formData = new FormData();
    formData.append('name', nameField.value);
    formData.append('email', emailField.value);
    formData.append('message', messageField.value);
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
    nameField.disabled = false;
    emailField.disabled = false;
    messageField.disabled = false;
    sendButton.disabled = false;
  }

  resetForm() {
    nameField.value = '';
    emailField.value = '';
    messageField.value = '';
  }
}
