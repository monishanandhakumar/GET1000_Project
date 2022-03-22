import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayproductComponent } from './displayproduct/displayproduct.component';
import { ProductinfoComponent } from './productinfo/productinfo.component';


const routes: Routes = [
  {
    path:'listofproducts',component:DisplayproductComponent
  },
  {
    path:'productinfo/:id',component:ProductinfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
