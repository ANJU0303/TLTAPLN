import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import { Users } from '../service/authentication.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserdetailsComponent implements OnInit {

  id1: any

  addForm: any
  Users: Users = {
    id: '',
    name: '',
    email: '',
    status: '',
    password: ''
  }
  constructor(private formBuilder: FormBuilder, private service: AuthenticationService, private router: Router,
    private Acti: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.id1 = this.Acti.snapshot.params[('id')]
    console.log(this.id1);

    if (this.id1) {
      this.service.getUserById(this.id1).subscribe((res: Users) => {
        this.Users = res;
        console.log(this.Users);
      })
      this.addForm = this.formBuilder.group({
        uid: this.Users.id,
        uname: this.Users.name,
        uemail: this.Users.email,
        ustatus: this.Users.status,
        upassword: this.Users.password
      })
    }

    else {

      console.log(this.id1);
      this.addForm = this.formBuilder.group({
        uid: [''],
        uname: [''],
        uemail: [''],
        ustatus: [''],
        upassword: ['']
      })

      console.log(this.addForm.value.uid);

      console.log(this.Users.id);

    }

  }
  cancelsave() {
    this.router.navigate(['details']);

  }
  detailsadd() {
    this.Users.id = this.addForm.value.uid;
    this.Users.name = this.addForm.value.uname;
    this.Users.email = this.addForm.value.uemail;
    this.Users.status = this.addForm.value.ustatus;
    this.Users.password = this.addForm.value.upassword
    console.log(this.addForm.value.uid);

    console.log(this.Users.id);
    if (this.id1) {

      this.service.edituser(this.id1, this.Users).subscribe((res: Users) => {
        alert("success")
        this.router.navigate(['list']);
      }, (err) => {
        console.log(err);
      });
    }
    else {
      this.service.saveUser(this.Users).subscribe((res: Users) => {
        alert("success")
        this.router.navigate(['list']);
      }, (err) => {
        console.log(err);
      });
    }
  }
}