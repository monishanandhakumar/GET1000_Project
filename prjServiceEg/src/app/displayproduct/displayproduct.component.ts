import { Component, OnInit } from '@angular/core';
import { Product } from '../Model/product';
import { ProductService } from '../ProductService';

@Component({
  selector: 'app-displayproduct',
  templateUrl: './displayproduct.component.html',
  styleUrls: ['./displayproduct.component.css']
})
export class DisplayproductComponent implements OnInit {

             //Singleton pattern
  constructor(private pservice:ProductService) { }

  pro?:Product[];
  ngOnInit() {
    this.displayProductDetails();
  }

  //call get products from product service

  displayProductDetails()
  {
    debugger;
    this.pro=this.pservice.getProducts();
  }

}
