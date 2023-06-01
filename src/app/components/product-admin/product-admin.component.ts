import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from 'src/app/models/IProduct';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-admin',
  templateUrl: './product-admin.component.html',
  styleUrls: ['./product-admin.component.css'],
})
export class ProductAdminComponent implements OnInit {
  productList: any;
  products: any;
  productId: any;
  constructor(private productservice: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.products = this.productservice
      .getAllProducts()
      .subscribe((response) => (this.productList = response));
  }
  // ngOnDestroy(): void {
  //   this.products.unsubscribe();
  // }

  deleteProduct(productId: any) {
    this.productservice.deleteProduct(productId).subscribe((response) => {
      this.productList = this.productList.filter(
        (item: any) => item.id != productId
      );
    });
  }
}
