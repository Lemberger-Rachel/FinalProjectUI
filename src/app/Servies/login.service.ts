import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from 'src/app/Models/Login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public http:HttpClient) { }

  URL:string="https://localhost:44370/api/login/GetLogin";
  email:string;
  password:string;

 
  setName(e){this.email=e}
  setPassword(p){this.password=p}
  setLocalUser(e:string,p:string)
  {
    this.setName(e);
    this.setPassword(p)
  }
  checkUser(login:Login):Observable<string>
  {
  
    return this.http.get<string>(this.URL+"?email="+login.email+"&password="+login.password);
  }
}
