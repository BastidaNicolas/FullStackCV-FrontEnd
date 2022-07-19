import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  experienceData:any;
  constructor(private experienceServ:PortfolioService) { }

  ngOnInit(): void {
    this.experienceServ.getData()
    .subscribe((data) => {
      this.experienceData = data.experience;
    })
  }

}
