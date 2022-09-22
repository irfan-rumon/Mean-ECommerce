import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserApiService } from 'src/app/services/user-api.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = [];

  constructor(private userApi:UserApiService, private router:Router) { }

  ngOnInit(): void {
    this.userApi.getUsers().subscribe( (users)=>{
        this.users = users;
    } )
  }

}
