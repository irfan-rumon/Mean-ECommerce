import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { Router } from '@angular/router';
import { ProductApiService } from 'src/app/services/product-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  product: Product;
  productId: number; 

  constructor(private productApi:ProductApiService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    let id: any =   this.route.snapshot.paramMap.get('id') ;
    this.productId = parseInt( id );
    this.productApi.getProduct( this.productId).subscribe( (product)=>{
        this.product = product;  
    } )
  }

  onSubmit(){
    this.productApi.editProduct( this.product).subscribe( ()=>{
      this.router.navigate(['/admin/products']); //subscribe er vitore korle page reload hoy na
    });
   
  }

}
