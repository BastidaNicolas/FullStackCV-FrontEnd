import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  educationData:any;
  constructor(private educationServ : PortfolioService) { }

  ngOnInit(): void {
    this.educationServ.getData()
    .subscribe((data) => {
      this.educationData = data.education;
    })
  }

}
