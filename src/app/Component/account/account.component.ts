import { Component, OnInit } from '@angular/core';
import{Account} from 'src/app/Models/Account'
import {AccountService} from 'src/app/Servies/account.service'
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  account:string
  // ={} as Account;
  constructor(private accountSer: AccountService) { }

  ngOnInit(): void {
    this.accountSer.getAccount(sessionStorage.getItem("currentUser")).subscribe({
      next: account=>{
        this.account=account;
        console.log(account);
      },
      error: err=>{
        console.log(err);
      }
    })

  }

}
