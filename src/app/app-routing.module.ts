import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductAdminComponent } from './components/product-admin/product-admin.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { OneProductDetailsComponent } from './components/one-product-details/one-product-details.component';
import { ProductFormComponent } from './components/product-form/product-form.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"login", component: LoginComponent},
  {path:"products", component: ProductsComponent},
  {path:"products/:id", component: OneProductDetailsComponent},
  {path:"products/:id/edit", component: ProductFormComponent},
  {path:"manageproducts", component: ProductAdminComponent},
  {path:"**", component: NotFoundComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
