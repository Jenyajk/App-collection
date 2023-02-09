import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent {
  registration: boolean = true;


  authorizationForm: FormGroup = new FormGroup({
    'userName': new FormControl("", Validators.required),
    'password': new FormControl("",
      [Validators.required,
        Validators.max(30),
        Validators.min(6)
      ]),
    'userEmail': new FormControl("",
      [Validators.required, Validators.email]),
  })



  signIn() {
this.registration = !this.registration
  }
}
