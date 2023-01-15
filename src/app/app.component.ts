import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PortfolioService } from './services/portfolio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'front-end';
  profileData:any;
  isRoute:Router;
  error:boolean=false;


  constructor(private portfolioData:PortfolioService, private router:Router) { 
    this.isRoute = router;
  }

  ngOnInit(): void {
    this.portfolioData.getProfile()
    .subscribe(data => {
      this.profileData = data;
    },
    error => {
      this.error = true
    })
  }

  onProfileUpdate(event:any){
    this.profileData = event;
  }
}
