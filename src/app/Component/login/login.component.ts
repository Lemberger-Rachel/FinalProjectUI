import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{Login} from 'src/app/Models/Login';
import {  Input, Output, EventEmitter } from '@angular/core';
import { LoginService } from 'src/app/Servies/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginSer:LoginService,private route:Router) { }
  email:string="";
  password:string="";
  id:number;
  
  ngOnInit(): void {
  }

  conect()
  {
    var login=new Login()
    login.email=this.email;
    login.password=this.password;
    
    this.loginSer.checkUser(login).subscribe(
      d=>{
        alert(d);
        if(d!=null)
        {
          this.loginSer.setName(this.email);
          this.loginSer.setPassword(this.password);
          sessionStorage.setItem("currentUser", d.toString());
          this.route.navigate(["./Account"]);
         }
         else{
           alert(" User does not exist!")}
        }
        ,
      e=>{alert(e.message+ "  error!")}
    );
  }

}
