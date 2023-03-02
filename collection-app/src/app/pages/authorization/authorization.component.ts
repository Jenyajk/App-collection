import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "../../core/api/api.service";
import {Router} from "@angular/router";
@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})

export class AuthorizationComponent {
  registration: boolean = true;

  errorMessage: String = ''
  constructor(private api: ApiService,
              private router: Router ) {
  }

  authorizationForm: FormGroup = new FormGroup({
    'username': new FormControl("", Validators.required),
    'password': new FormControl("",
      [Validators.required,
        Validators.max(30),
        Validators.min(6)
      ]),
    'email': new FormControl("",
      [Validators.required, Validators.email]),
  })

  authPost() {
    const username  = this.authorizationForm.get("username")?.value
    const password =  this.authorizationForm.get("password")?.value
    const email = this.authorizationForm.get("email")?.value
    this.api.registrationUser(username, password ,email).subscribe( data =>{
      console.log(data)
      localStorage.setItem('username',this.authorizationForm.get('username')?.value)
    } )

   this.router.navigate([''])
  }

  enter() {
    const username  = this.authorizationForm.get("username")?.value
    const password =  this.authorizationForm.get("password")?.value

    this.api.postUser(username , password).subscribe( data =>{
      localStorage.setItem('token',data)
      }

    )
    localStorage.setItem('username',this.authorizationForm.get('username')?.value)
     this.router.navigate([''])
  }

  signIn() {
this.registration = !this.registration
  }
}
