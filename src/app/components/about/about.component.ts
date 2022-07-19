import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  about:any;
  constructor(private aboutServ:PortfolioService) { }

  ngOnInit(): void {
    this.aboutServ.getData()
    .subscribe((data) => {
      this.about = data.about
    })
  }

}
