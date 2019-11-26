import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isLogin: boolean;
  loginForm: boolean;
  constructor(private router: Router, private loginService: LoginService ) { }

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

  goToLogout() {
       this.loginService.logout().subscribe(data => {
         if (data.success === true) {
          localStorage.removeItem('token');
          this.router.navigate(['/home'])
          this.isLogin= true;
         } else {
           alert('Error en logout')
         }
       });


  }



}
