import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  @Input() productList: any;
  
  constructor(private productservice: ProductService) {
    
  }
  ngOnInit(): void {
    this.productservice
      .getAllProducts()
      .subscribe((response) => (this.productList = response));
  }

  buyProduct(){
    this.productList.quantity -=1;
  }
}
