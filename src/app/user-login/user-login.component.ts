import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import { Users } from '../service/authentication.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent  implements OnInit {
  loginForm: any;
  Users: Users = {

    id: '',
    name: '',
    email: '',
    status: '',
    password: ''
  }
  constructor(private formBuilder: FormBuilder, private service: AuthenticationService, private router: Router) {
  }

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
      uname: ['',Validators.required],
      upassword: ['',Validators.required],

    })

    this.Users.name = this.loginForm.value.uname;
    this.Users.password = this.loginForm.value.upassword;

    
  }

  result: any = false

  proceedlogin(): void {

     if (this.loginForm.valid) {
  this.service.authenticate(this.loginForm.value.uname, this.loginForm.value.upassword)}
else{
  alert("Required")
}
  }
}
