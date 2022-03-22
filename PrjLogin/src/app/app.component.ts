import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './Service/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PrjLogin';

  constructor(private loginservice:LoginService,private userrouter:Router) { }
usercheck;
  ngOnInit() {

    console.log(this.loginservice.loginsessionvariable);
     //To avoid calling the method through url
     if(this.loginservice.loginsessionvariable)
     {
       this.usercheck=true;
      
     }
     else
     {
       this.usercheck=false;
       this.userrouter.navigate(['/home']);
     }
     console.log( this.usercheck);
  }

  //calling dologoff method from loginservice
  logOff()
  {
    debugger;
    this.loginservice.dologoff();
   
  }
}
