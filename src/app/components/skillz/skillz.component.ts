import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-skillz',
  templateUrl: './skillz.component.html',
  styleUrls: ['./skillz.component.scss']
})
export class SkillzComponent implements OnInit {
  skills:any;
  constructor(private skillsServ:PortfolioService) { }

  ngOnInit(): void {
    this.skillsServ.getData()
    .subscribe((data)=>{
      this.skills = data.skills;
    })
  }

}
