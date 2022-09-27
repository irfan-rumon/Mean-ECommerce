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
  passNotMatched: boolean = false;

  constructor(private router: Router, private userApi: UserApiService) { }

  ngOnInit(): void {
  }

  onSubmit(){
     if( this.user.password != this.user.passConfirm)
     {
        this.passNotMatched = true;
        console.log("pass mile nai");
        return;
     }
     //console.log(this.user);
     this.userApi.addUser(this.user).subscribe();
     alert('Registration Successfull!');
     this.router.navigate(['/login']);
    

  }


}
