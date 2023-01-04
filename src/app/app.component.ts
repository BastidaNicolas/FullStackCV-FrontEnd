import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PortfolioService } from './services/portfolio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'front-end';
  profileData:any;
  isRoute:Router;


  constructor(private portfolioData:PortfolioService, private router:Router) { 
    this.isRoute = router;
  }

  ngOnInit(): void {
    this.portfolioData.getProfile()
    .subscribe(data => {
      this.profileData = data;
    })
  }

  onProfileUpdate(event:any){
    this.profileData = event;
  }
}
