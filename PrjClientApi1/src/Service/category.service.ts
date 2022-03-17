import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Category } from "src/app/Model/category.model";

@Injectable()
export class CategoryService
{

    constructor(private http:HttpClient)
    {

    }
  //.net core prjwebapi1 url
    readonly uri="http://localhost:26212/api/Category";

    getCategory()
    {
     
      
        return this.http.get(this.uri);
    }

    //Post
    
    insertCategory(cat:Category)
    {
    
       return this.http.post(this.uri,cat,{responseType: 'text'})
    }
  //Delete

  deleteCategory(cid:number)
  {
    return this.http.delete(this.uri+'/'+cid);
    debugger;
  }

  //getcategoryby id

  getcatbyid(id:number)
  {
    return this.http.get(this.uri+'/'+id);
  }

  //Put

  editcategoryservice(cat)
  {
    debugger;
    return this.http.put(this.uri+'/'+cat.categoryId,cat);
  }

}