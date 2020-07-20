import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Account} from '../models/Account'
@Injectable({
  providedIn: 'root'
})
export class AccountService {
  url="http://localhost:44370/api/login/GetAccount";
  id="e7775225-9c97-4460-d971-08d82bd1d7c5";
  constructor(private http: HttpClient) { }

  getAccount(id): Observable<string>
  {
      return this.http.get<string>(this.url+'/'+id).pipe();
  }
}
