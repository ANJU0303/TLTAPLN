import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import { Users } from '../service/authentication.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  User:any;
  Users: Users = {
    id: '',
    name: '',
    email: '',
    status: '',
    password: ''
  }
  ngOnInit(): void {
    this.service.getUsers().subscribe((res: Users) => {
      this.User = res
      console.log(this.Users);
      
      
    }
    )
  }
  constructor(private formBuilder: FormBuilder, private service: AuthenticationService, private router: Router) {
  }
  proceededit(_id: string) {
     this.router.navigate(['/details',_id]);
    
  }
  proceeddelete(_id: string) {
    console.log(_id)
    this.service.deleteUser(_id).subscribe((res: Users) => {
      alert("delete successful")
      this.router.navigate(['/list']);
    })

  }

}
