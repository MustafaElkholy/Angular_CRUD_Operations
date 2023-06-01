import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iproduct } from 'src/app/models/IProduct';
import { productList } from 'src/app/moduless/data';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-one-product-details',
  templateUrl: './one-product-details.component.html',
  styleUrls: ['./one-product-details.component.css'],
})
export class OneProductDetailsComponent implements OnInit {
  productId: any;
  productItem: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) {}
  buyProduct() {
    this.productItem.quantity -= 1;
  }

  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.paramMap.get('id');
    this.productService
      .getProductBydId(this.productId)
      .subscribe((response) => (this.productItem = response));

    // for (let index = 0; index < productList.length; index++) {

    //  if(productList[index].id == this.productId) {
    //   this.productItem = productList[index];
    //   break;
    //  }
    // }
  }
}
