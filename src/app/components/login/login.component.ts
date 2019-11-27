import { Component, OnInit } from '@angular/core';
import { LoginModel } from 'src/app/models/login.model';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginQuery: LoginModel = new LoginModel();
  aux = {}
  requiredField = false;
  unauthorize = false;
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  handleChange = e => {
    this.requiredField = false;
    console.log(e.target.name)
    this.loginQuery[e.target.name] = e.target.value
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(this.loginQuery);
    if((this.loginQuery && this.loginQuery.email !== undefined) && (this.loginQuery && this.loginQuery.password !== undefined))  {
      this.loginService.login(this.loginQuery).subscribe(data => {
        if(data.user === null) {
         this.unauthorize =true;
        } else {
          localStorage.setItem('token', JSON.stringify(data.access_token));
          window.location.href = '/list'
        }
        console.log(data);
      }, error => console.log(error))
    } else {
      this.requiredField = true;
    }

  }
}
