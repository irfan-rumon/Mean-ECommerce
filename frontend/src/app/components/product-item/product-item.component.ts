import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() name:string;
  @Input() imageURL:string;
  @Input() unitPrice: number;
  @Input() brand:string;

  constructor() { }

  ngOnInit(): void {
  }

}
