import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  experienceData:any;
  isEdit:boolean = false;
  isAdd:boolean = false;
  constructor(private experienceServ:PortfolioService) { }

  ngOnInit(): void {
    this.experienceServ.getData()
    .subscribe((data) => {
      this.experienceData = data.experience;
    })
  }

  handleEdit(){
    this.isEdit = !this.isEdit
  }
  handleAdd(){
    this.isAdd = !this.isAdd
  }

}
