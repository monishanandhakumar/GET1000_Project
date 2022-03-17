import { Component, OnInit } from '@angular/core';

import { CategoryService } from 'src/Service/category.service';
import { Category } from '../Model/category.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private catservice:CategoryService) { }

  ngOnInit() {
    this.fetchCategory();
  }
   
  //Get the category
  categoryinfo?:any;
  fetchCategory()
  {
   
       this.catservice.getCategory().subscribe((data)=>{this.categoryinfo=data;console.table(this.categoryinfo)});
  }

  //Post
  //object
  category:Category={}; 
  result;
  addCategory()
  {
   
     this.catservice.insertCategory(this.category).subscribe(
       (data)=>
       {console.log(data)
         if(data=="Success")
      {
        window.alert("Data Added!!!");
        this.fetchCategory();
      }
      else{
        window.alert("Data  Not Added!!!");
      }
    }
       
       );
     
  }

//Delete
msg;
removeCategory(cid:number)
{
  this.catservice.deleteCategory(cid).subscribe((data)=>{this.msg=data,console.log(this.msg)
 });
  
}
//get particular category details

editCategory(id:number)
{
   this.catservice.getcatbyid(id).subscribe((data)=>{this.category=data,console.log(this.category)});
}
//update
updateCategory()
{
  debugger;
   this.catservice.editcategoryservice(this.category).subscribe((data)=>{this.msg,console.log(this.msg)});
}


}
