import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule,Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  doLogin() {
    this.router.navigateByUrl('/tasklist');

  }
}
