import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  @ViewChild('form', { static: false }) form!: HTMLFormElement;
  @ViewChild('nameField', { static: false })
  nameField!: ElementRef<HTMLInputElement>;
  @ViewChild('emailField', { static: false })
  emailField!: ElementRef<HTMLInputElement>;
  @ViewChild('messageField', { static: false })
  messageField!: ElementRef<HTMLTextAreaElement>;
  @ViewChild('sendButton', { static: false })
  sendButton!: ElementRef<HTMLButtonElement>;

  async sendMail() {
    console.log(this.form);
    let nameField = this.nameField.nativeElement;
    let emailField = this.emailField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let sendButton = this.sendButton.nativeElement;

    nameField.disabled = true;
    emailField.disabled = true;
    messageField.disabled = true;
    sendButton.disabled = true;

    //TODO: Animation

    let formData = new FormData();
    formData.append('name', nameField.value);
    formData.append('email', emailField.value);
    formData.append('message', messageField.value);

    //senden
    await fetch(
      'https://laura-hesidenz.developerakademie.net/send_mail/send_mail.php',
      {
        method: 'POST',
        body: formData,
      }
    );

    //TODO: NAchricht gesendet
    nameField.disabled = false;
    emailField.disabled = false;
    messageField.disabled = false;
    sendButton.disabled = false;
  }
}
