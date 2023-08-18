import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements AfterViewInit {
  nameFieldElement;
  emailFieldElement;
  messageFieldElement;
  sendButtonElement;

  nameFieldHasValue;
  emailFieldHasValue;
  messageFieldHasValue;

  @ViewChild('form', { static: false }) form!: HTMLFormElement;
  @ViewChild('nameField', { static: false })
  nameField!: ElementRef<HTMLInputElement>;
  @ViewChild('emailField', { static: false })
  emailField!: ElementRef<HTMLInputElement>;
  @ViewChild('messageField', { static: false })
  messageField!: ElementRef<HTMLTextAreaElement>;
  @ViewChild('sendButton', { static: false })
  sendButton!: ElementRef<HTMLButtonElement>;

  ngAfterViewInit() {
    this.nameFieldElement = this.nameField.nativeElement;
    this.emailFieldElement = this.emailField.nativeElement;
    this.messageFieldElement = this.messageField.nativeElement;
    this.sendButtonElement = this.sendButton.nativeElement;
  }

  async sendMail() {
    console.log(this.form);
    this.disableForm();
    //TODO.ANIMATION
    this.collectAndSendEmailData();
    this.enableForm();
  }

  disableForm() {
    this.nameFieldElement.disabled = true;
    this.emailFieldElement.disabled = true;
    this.messageFieldElement.disabled = true;
    this.sendButtonElement.disabled = true;
  }

  collectAndSendEmailData() {
    let formData = new FormData();
    formData.append('name', this.nameFieldElement.value);
    formData.append('email', this.emailFieldElement.value);
    formData.append('message', this.messageFieldElement.value);
    this.sendDataForEmail(formData);
  }

  async sendDataForEmail(formData) {
    await fetch(
      'https://laura-hesidenz.developerakademie.net/send_mail/send_mail.php',
      {
        method: 'POST',
        body: formData,
      }
    );
  }

  enableForm() {
    this.nameFieldElement.disabled = false;
    this.emailFieldElement.disabled = false;
    this.messageFieldElement.disabled = false;
    this.sendButtonElement.disabled = false;
  }
}
