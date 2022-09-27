import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserApiService } from 'src/app/services/user-api.service';
import { Router } from '@angular/router';
import { LoggerUser } from 'src/app/models/loggerUser';
import { AuthorizationService } from 'src/app/services/authorization.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: LoggerUser = {} as LoggerUser;
  failedLogin: boolean = false;;
  

  constructor(private userApi: UserApiService, private router:Router,
             private auth: AuthorizationService) { }

  ngOnInit(): void {
   
  }

 


  onSubmit(){
    console.log("Log Entered!!");
    this.user.strategy = "local";
   this.userApi.logUser(this.user).subscribe(   (res)=>{
        /*console.log("whole response:", res);
        console.log( "token: ", res["accessToken"]);
        console.log("expiry value: ", res["authentication"]["payload"].exp);
        console.log("User Info: ", res["user"]);
        console.log("User Name: ", res["user"].fullName);
        console.log("User Address: ", res["user"].address);
        console.log("User Phone: ", res["user"].phone);
        console.log("User Roll: ", res["user"].roll);*/

        this.auth.setToken(res["accessToken"]);
        this.auth.setUser(res['user']);
        console.log(this.auth.getUser());
        if( res['user'].roll == 'user') this.router.navigate(['/home']);
        else if ( res['user'].roll == 'admin') this.router.navigate(['/admin']);
      
     }, (err) => {
        console.log("Dhikce");
        this.failedLogin = true;
    } );
    
  }

}
