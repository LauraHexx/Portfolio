import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  isHovered: boolean = false;
  //@ViewChild('form') form!: ElementRef;
  //@ViewChild('nameField') nameField!: ElementRef;
  //@ViewChild('messageField') messageField!: ElementRef;
  //@ViewChild('button') button!: ElementRef;

  reactiveForm: FormGroup;

  constructor(private builder: FormBuilder) {}

  ngOnInit() {
    this.reactiveForm = this.builder.group({
      age: [null, Validators.required],
    });
  }

  onMouseOver(): void {
    this.isHovered = true;
  }

  onMouseOut(): void {
    this.isHovered = false;
  }

  sendMail() {
    //action="https://laura-hesidenz.developerakademie.net/send_mail/send_mail.php"
    //console.log('sending mail', this.form);
    //this.nameField.nativeElement.disabled = true;
    //this.messageField.nativeElement.disabled = true;
    //this.button.nativeElement.disabled = true;
  }
}
