import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { Router } from '@angular/router';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  experienceData:Array<any> = [];
  isEdit:boolean = false;
  isAdd:boolean = false;
  hasBeenDraged:boolean = false;
  isRoute:Router; 
  constructor(private portfolioService:PortfolioService, private router:Router) {
    this.isRoute = router;
  }

  ngOnInit(): void {
    this.portfolioService.getExperience()
    .subscribe((data) => {
      this.experienceData = data;
    })
  }

  handleEdit(){
    if(this.hasBeenDraged && this.isEdit){
      const newExperienceData = []
      for(let experience of this.experienceData){
        newExperienceData.push(
          {
            "id": experience.id,
            "listPosition": experience.listPosition,
            "jobTitle": experience.jobTitle,
            "companyName": experience.companyName,
            "startDate": experience.date.startDate,
            "endDate": experience.date.endDate,
            "imageUrl": experience.imageUrl
          }
        )
      }
      this.isEdit = false;
      this.portfolioService.putExperience(JSON.stringify(newExperienceData)).subscribe();
      this.hasBeenDraged = false;
      return;
    }
    this.isEdit = !this.isEdit
  }
  handleAdd(){
    this.isAdd = !this.isAdd
  }

  handleClick(){
    if(!this.isEdit){
      return 
    }
  }

  drop(event: CdkDragDrop<object[]>) {
    moveItemInArray(this.experienceData, event.previousIndex, event.currentIndex);
    for(let experiance of this.experienceData){
      experiance.listPosition = this.experienceData.findIndex(ex => ex.id === experiance.id) + 1;
    }
    this.hasBeenDraged = true;
  }

  onExperienceUpdate(event:any){
    if(event.length >= 0){
      this.experienceData = event;
    }
    let index = this.experienceData.findIndex(experience => experience.id === event.id);
    this.experienceData[index] = event;
  }

}
