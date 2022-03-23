import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { CategoryService } from 'src/Service/category.service';
import { HttpClientModule } from '@angular/common/http';
import { CategorycrudComponent } from './categorycrud/categorycrud.component'; //Http service
import { FormsModule } from '@angular/forms';
import { SeatComponent } from './seat/seat.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    CategorycrudComponent,
    SeatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
