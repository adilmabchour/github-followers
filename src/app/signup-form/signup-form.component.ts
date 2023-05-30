import { ContactFormComponent } from './../contact-form/contact-form.component';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { usernameValidator } from './username.validator';
@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  constructor(){}
  submit(f:any){

  }

  form = new FormGroup({
    username : new FormControl('',[
      Validators.required,
      Validators.minLength(3),
      usernameValidator.cannotContainSpace
    ]),
    password : new FormControl('',Validators.required)
  });

  get username(){
    return this.form.get("username");
  }
  get password(){
    return this.form.get("password");
  }
}
