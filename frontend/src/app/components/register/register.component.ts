import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserApiService } from 'src/app/services/user-api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user:User = {} as User;

  constructor(private router: Router, private userApi: UserApiService) { }

  ngOnInit(): void {
  }

  onSubmit(){
     console.log(this.user);
  }


}
