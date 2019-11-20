import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  loginForm: boolean;
  constructor(private router: Router) { }

  ngOnInit() {

  }

  goToLogin() {
    this.router.navigate(['/login']);
  }



}
