import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { SearchService } from 'src/app/services/search.service';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  products: Product[];

  constructor(
      private router:Router,
      private searchService:SearchService
  ) { }

  ngOnInit(): void {
      this.products = this.searchService.getProducts();
  }

}
