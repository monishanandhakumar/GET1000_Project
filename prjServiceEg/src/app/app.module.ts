import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayproductComponent } from './displayproduct/displayproduct.component';
import { ProductService } from './ProductService';
import { ProductinfoComponent } from './productinfo/productinfo.component';
import { CartService } from './cartservice';

@NgModule({
  declarations: [
    AppComponent,
    DisplayproductComponent,
    ProductinfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProductService,CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
