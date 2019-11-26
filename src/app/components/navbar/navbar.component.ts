import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isLogin: boolean;
  loginForm: boolean;
  constructor(private router: Router) { }

  ngOnInit() {

    if (localStorage.getItem('token') === null || localStorage.getItem('token') === undefined) {
      this.isLogin = false;
    } else {
      this.isLogin = true;
    }
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }



}
