import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  socialLinks:any;
  constructor(private headerData:PortfolioService) { }

  ngOnInit(): void {
    this.headerData.getData()
    .subscribe((data)=>{
      this.socialLinks = data.social; 
    })
  }

}
