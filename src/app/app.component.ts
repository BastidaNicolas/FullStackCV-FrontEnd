import { Component } from '@angular/core';
import { PortfolioService } from './services/portfolio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'front-end';
  profileData:any;

  constructor(private portfolioData:PortfolioService) { }

  ngOnInit(): void {
    this.portfolioData.getProfile()
    .subscribe(data => {
      console.log(data)
      this.profileData = data;
    })
  }
}
