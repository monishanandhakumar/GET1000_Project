import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProductService } from '../ProductService';

@Component({
  selector: 'app-productinfo',
  templateUrl: './productinfo.component.html',
  styleUrls: ['./productinfo.component.css']
})
export class ProductinfoComponent implements OnInit {

  constructor(private pser:ProductService,private route:ActivatedRoute) { }

  pid?:number;
  ngOnInit() {
    //getting id from url
    /* this.route.paramMap.subscribe((params:ParamMap)=>{
       this.pid=parseInt(params.get('id'))  //without parseint works in angular12
     });*/
      
     this.getSelectedProduct();
  }

//call the getProductInfo from product service by passing productid
selectedpro;
getSelectedProduct()
{
 //this.selectedpro= this.pser.getProductInfo(this.pid);
                                           //fetching the parameter from url(route) 
 this.selectedpro= this.pser.getProductInfo(this.route.snapshot.params.id);
}

}
