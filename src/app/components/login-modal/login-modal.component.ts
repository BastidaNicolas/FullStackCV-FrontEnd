import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {
  register:boolean = false;
  forgotPass:boolean = false;
  constructor() { }

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
}
