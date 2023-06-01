import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/models/IProduct';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  productList: any;
  productId: any;

  constructor(private productservice: ProductService) {}
  ngOnInit(): void {
    this.productservice
      .getAllProducts()
      .subscribe((response) => (this.productList = response));
  }
  buyProduct(id: any) {
    this.productList[id].quantity -= 1;
  }
}
