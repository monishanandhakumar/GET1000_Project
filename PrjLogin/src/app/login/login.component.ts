import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from '../Service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userrouter:Router,private loginservice:LoginService ) { }

  

  emp:any={};
  loginstatus;
  loggedinempdetails:any={};
  ngOnInit() {
  }
err;
  doLogin()
  {
    //debugger;
    //console.log(this.emp);
    //Admin
    if(this.emp.mobile==123 &&this.emp.password=="123")
    {
      debugger;
      this.loginservice.loginuservariable=true;
      sessionStorage.setItem('username','admin')
      //to check any user is logged in or not 
      this.loginservice.loginCheck();
      this.userrouter.navigate(['/adminlayout']);

    }

    else if(this.emp!= null)
    {
       this.loginservice.empLogin(this.emp).subscribe((data)=>{console.log(data),
        this.loggedinempdetails=data as JSON;
        debugger;

         sessionStorage.setItem('username',this.loggedinempdetails.name);
          //to check any user is logged in or not 
      this.loginservice.loginCheck();
      debugger;
         if(data!='Invalid')
         {
           debugger;
           console.log("Inside ")
        //  this.loginservice.loginuservariable=true;
          this.userrouter.navigate(['/employee']);
          
         }
         
       else 
       {
        console.log(this.loggedinempdetails.text);
         debugger;
         this.userrouter.navigate(['/login']);
         this.err="Invalid Mobile No or Password!!!";
       }

       }, (error) => {                              //Error callback
        console.error(error)
        this.err= error.text});
      }
      else{
        this.err="Please enter valid creditianls!!!";
      }
  }

}
