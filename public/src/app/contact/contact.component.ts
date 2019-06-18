import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  formData: any;
  thankYou: String;

  constructor(
    private fb: FormBuilder,
    private _router: Router,
    private _httpService: HttpService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  submitFormData() {

    console.log("form data in component", this.contactForm.value)
    this._httpService.submitEmail(this.contactForm)
      .subscribe((data: any) => {
        if (data.errors) {
          console.log("Here are the errors", data.errors)
        } else {
          console.log(data)
        }
      });

      this.contactForm = this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', Validators.required],
        message: ['', Validators.required]
      });

      this.thankYou = "Thank you! I will be in touch shortly."

  }
}
