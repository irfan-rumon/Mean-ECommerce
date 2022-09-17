import { Component, OnInit } from '@angular/core';
import { CatagoryApiService } from 'src/app/services/catagory-api.service';
import { Router } from '@angular/router';
import { Catagory } from 'src/app/models/catagory';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  catagories: Catagory[] = [];
  
  constructor(private router: Router, private catagoryApi:CatagoryApiService) { }

  ngOnInit(): void {
    this.catagoryApi.getCatagories().subscribe(  (catagories)=>{
       this.catagories = catagories;
       console.log("heyy", catagories);
    } )
  }

}
