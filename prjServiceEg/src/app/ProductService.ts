import { Injectable } from "@angular/core";
import { Product } from "./Model/product";

//decorator
@Injectable()
export class ProductService
{
    product:Product[];
    constructor()
    {
        this.product=[
            {pid:11,pname:'pencil',price:10,quantity:10,image:'assets/images/pencil.png',desc:'No discount'},
            {pid:12,pname:'ball',price:100,quantity:5,image:'assets/images/ball.jpg',desc:'10 % discount'},
            {pid:13,pname:'doll',price:250,quantity:30,image:'assets/images/doll.jpeg',desc:'50 % discount'}
        ];
    }

    //fetch all the product info

    getProducts()
    {
        debugger;
        return this.product;
    }
//fetch the particular product details by passing pid

   getProductInfo(prodid)
   {
     let pinfo;
     this.product.forEach(ele=>{
         if(ele.pid==prodid)
         {
             pinfo=ele;
         }
     });
       return pinfo;
   }


   addProducts()
   {
       
   }
}