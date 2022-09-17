import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductApiService } from 'src/app/services/product-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product: Product = {} as Product;

  constructor(private productApi: ProductApiService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.product);
    this.productApi.addProduct(this.product).subscribe(  ()=>{
      this.router.navigate(['/admin/products']); //subscribe er vitore korle page reload hoy na
    } );
   
  }

}
