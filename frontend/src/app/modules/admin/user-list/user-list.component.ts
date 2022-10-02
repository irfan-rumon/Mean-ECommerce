import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserApiService } from 'src/app/services/user-api.service';



@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class  UserListComponent  implements OnInit {

  users: any[] = [];

  constructor(private userApi: UserApiService, private router:Router) { }

  ngOnInit(): void {
    this.userApi.getUsers().subscribe( (res)=>{
        let arr:any = res;   //temporary array use kore response obj ke cathck kora
        this.users = arr.data;
    } )
  }

  onChangeStatus(user: User){

 
        for(let u of this.users){
           if( u._id == user._id  ){
              if( u.status == "Active")u.status = "Disabled";
              else u.status = "Active";
           }
            
        }

  }

}
