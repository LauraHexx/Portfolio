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

  /**
   * Lifecycle hook that is called after the view is initialized.
   * @async
   */
  ngAfterViewInit() {
    this.nameField = this.contactForm.get('nameForm');
    this.emailField = this.contactForm.get('emailForm');
    this.messageField = this.contactForm.get('messageForm');
    this.sendButton = this.sendButtonRef.nativeElement;
  }

  /**
   * Form group for the contact form.
   */
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

  /**
   * Sends an email when the form is submitted.
   * Initiates loading state, disables form, sends data, displays success message,
   * resets form and reverts loading state.
   * @async
   */
  async sendingMail() {
    this.isLoading = true;
    this.contactForm.disable();
    this.getAndSendData();
    await this.showSucessMessage();
    this.enableAndResetForm();
    this.isLoading = false;
  }

  /**
   * Retrieves form data and sends it.
   * @async
   */
  async getAndSendData() {
    let formData = this.getData();
    await this.sendMail(formData);
  }

  /**
   * Retrieves form data.
   * @returns {FormData} The form data.
   */
  getData() {
    let formData = new FormData();
    formData.append('name', this.nameField.value);
    formData.append('email', this.emailField.value);
    formData.append('message', this.messageField.value);
    return formData;
  }

  /**
   * Sends form data
   * @param {FormData} formData - The form data to send.
   */
  sendMail(formData) {
    event.preventDefault();
    fetch('https://formspree.io/f/xbjngpll', {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
      },
    }).catch((error) => {
      console.log(error);
    });
  }

  /**
   * Shows a success message after the email is sent.
   * @async
   */
  async showSucessMessage() {
    this.emailWasSent = true;
    setTimeout(() => {
      this.emailWasSent = false;
    }, 2000);
  }

  /**
   * Enables and resets the form after email is sent.
   * @async
   */
  enableAndResetForm() {
    this.contactForm.enable();
    this.contactForm.reset();
    this.resetStyling();
    this.resetValidationVariables();
  }

  /**
   * Resets the border-styling of input fields.
   * @async
   */
  resetStyling() {
    const inputs = document.querySelectorAll('input');
    inputs.forEach((input) => {
      input.classList.remove('green-border', 'red-border');
    });
  }

  /**
   * Resets the validation variables for input fields.
   * @async
   */
  resetValidationVariables() {
    this.nameFieldIsValid = undefined;
    this.emailFieldIsValid = undefined;
    this.messageFieldIsValid = undefined;
  }

  /**
   * Checks the validity of an input field.
   * @param {AbstractControl} inputField - The input field to check.
   * @param {string} inputValidVariable - The variable to store the validity status.
   * @async
   */
  checkInputField(inputField, inputValidVariable) {
    if (inputField?.invalid && (inputField?.dirty || inputField?.touched)) {
      this[inputValidVariable] = false;
    } else {
      this[inputValidVariable] = true;
    }
  }
}
