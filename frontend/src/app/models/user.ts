export interface User{
    _id?:number;
    userName: string;
    email: string;
    fullName: string;
    phone: number;
    address: string;
    password:string;
    passConfirm?:string;
    roll?:string;

  }