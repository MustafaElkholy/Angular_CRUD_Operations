import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit {
  productId: any;
  product: any;
  constructor(
    private productService: ProductService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.productId != 0) {
      this.productService
        .getProductBydId(this.productId)
        .subscribe((response) => {
          this.product = response;
          this.getProductName.setValue(this.product.productName);
          this.getProductDescription.setValue(this.product.productDescription);
          this.getProductPrice.setValue(this.product.price);
          this.getProductQuantity.setValue(this.product.quantity);
        });
    }
  }

  productForm = new FormGroup({
    productName: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    price: new FormControl('', [Validators.required, Validators.min(100)]),
    quantity: new FormControl('', [Validators.required, Validators.min(1)]),
    productDescription: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  });

  get getProductName() {
    return this.productForm.controls['productName'];
  }

  get getProductPrice() {
    return this.productForm.controls['price'];
  }

  get getProductQuantity() {
    return this.productForm.controls['quantity'];
  }
  get getProductDescription() {
    return this.productForm.controls['productDescription'];
  }

  formOperation(e: Event) {
    e.preventDefault();
    // console.log(this.productForm);
    // console.log(this.getProductName.errors);

    if (this.productForm.status == 'VALID') {
     if (this.productId == 0){
      this.productService
      .addNewProduct(this.productForm.value)
      .subscribe(() => this.router.navigate(['/products']));
     }else{
      this.productService.editProduct(this.productId,this.productForm.value).subscribe(() => this.router.navigate(['/products']));

     }
    } 
  }
}
