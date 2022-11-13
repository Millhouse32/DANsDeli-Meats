import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: any;
  emailRegx = /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;

  constructor(
    private formBuilder: FormBuilder,
    public appService:AppService
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.pattern(this.emailRegx)]],
      password: [null, Validators.required]
    });
  }

  submit() {
    if (!this.loginForm.valid) {
      return;
    }
    var body = {
      "email" : this.loginForm.value["email"],
      "password" : this.loginForm.value["password"]
    };
    this.appService.Login(body).subscribe( response => {
      console.log(response);
      localStorage.setItem('firstname', response[0]["firstname"]);
    },
    error => {
      console.log(error);
    });

    
  }

}