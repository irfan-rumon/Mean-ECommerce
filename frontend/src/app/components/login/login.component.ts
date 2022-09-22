import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserApiService } from 'src/app/services/user-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:User = {} as User;
  registeredUsers: User[];
  private userToken:string = "user12345";
  private adminToken:string = "admin12345";
  failedLogin:boolean;

  constructor(private userApi: UserApiService, private router:Router) { }

  ngOnInit(): void {
    this.userApi.getUsers().subscribe( (users)=>{
        this.registeredUsers = users;
    } )
    this.user.userName = '';
    this.user.password = '';
    this.failedLogin = false;
  }

  isAuthenticatedUser(){
     let isFound:boolean = false;
     for(let regUser of this.registeredUsers){
       if( this.user.userName == regUser.userName && this.user.password == regUser.password){
           isFound = true;
           this.user.id = regUser.id;
           this.user.address = regUser.address;
           this.user.phone = regUser.phone;
           break;
       }
     }
     return isFound;
  }


  onSubmit(){
    console.log("Entered!!");
    if( this.user.userName == "admin" && this.user.password == "admin123" ){
        localStorage.setItem('token', this.adminToken);
        this.router.navigate(['/admin']);
        return;
    }
    if(  this.isAuthenticatedUser(   )  ){
      console.log("Yes, authenticated");
      localStorage.setItem('token', this.userToken);
        localStorage.setItem('user-id', String(this.user.id));
        localStorage.setItem('user-address', String(this.user.address));
        localStorage.setItem('user-phone', String(this.user.phone));
        
        this.router.navigate(['/home']);
        return;
    }
    else{
       this.failedLogin = true;
    }
  }

}
