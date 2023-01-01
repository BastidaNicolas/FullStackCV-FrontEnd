import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {
  register:boolean = false;
  forgotPass:boolean = false;
  isRoute:Router;

  constructor(private portfolioService : PortfolioService, private cookieService : CookieService, private router:Router) {
    this.isRoute = router;
  }

  ngOnInit(): void {
  }

  setDefault(delay:number){
    setTimeout(() => {
      this.register = false;
      this.forgotPass = false;
    }, delay)
  }
  handleBackgroundClick(e:any){
    if(e.target.id === "loginModal"){
      this.setDefault(150)
    }
  }
  setRegister(value:boolean){
    this.register = value;
  }
  setForgotPass(value:boolean){
    this.forgotPass = value;
  }

  handleLogin(username:string, password:string){
    let urlencoded = new URLSearchParams();
    urlencoded.set('username', username);
    urlencoded.set('password', password);

    this.portfolioService.postLogin(urlencoded).subscribe(res => {
      this.cookieService.set('token', JSON.parse(res).access_token, .5)
      this.router.navigate(['/admin-panel'])
    });
  }
}
