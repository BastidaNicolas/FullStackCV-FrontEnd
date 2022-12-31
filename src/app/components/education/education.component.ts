import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { Router } from '@angular/router';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  educationData:Array<any> = [];
  isAdd:boolean=false;
  isEdit:boolean=false;
  isEditItem:boolean=false;
  isRoute:Router;
  hasBeenDraged:boolean=false;
  constructor(private portfolioService : PortfolioService, private router:Router) {
    this.isRoute = router;
  }

  ngOnInit(): void {
    this.portfolioService.getEducation()
    .subscribe((data) => {
      this.educationData = data;
    })
  }

  handleEdit(){
    if(this.hasBeenDraged && this.isEdit){
      const newEducationData = []
      for(let education of this.educationData){
        newEducationData.push(
          {
            "id":education.id,
            "listPosition": education.listPosition,
            "schoolName": education.schoolName,
            "title": education.title,
            "startDate": education.date.startDate,
            "endDate": education.date.endDate,
            "about": education.about,
            "imageUrl": education.imageUrl
        }
        )
      }
      this.isEdit = false;
      this.portfolioService.putEducation(JSON.stringify(newEducationData)).subscribe();
      this.hasBeenDraged = false;
      return;
    }
    this.isEdit = !this.isEdit
  }
  handleAdd(){
    this.isAdd = !this.isAdd
  }

  drop(event: CdkDragDrop<object[]>) {
    moveItemInArray(this.educationData, event.previousIndex, event.currentIndex);

    for(let education of this.educationData){
      education.listPosition = this.educationData.findIndex(ed => ed.id === education.id) + 1;
    }
    this.hasBeenDraged = true;
    //use this to make a function that finds object with "currentIndex" and replaces it with "previousIndex" in its "listPosition"
    console.log("Current:", event.currentIndex,"Previous: ", event.previousIndex)
  }

  handleClick(){
    if(!this.isEdit){
      return 
    }
    this.isEditItem = !this.isEditItem
    console.log(this.isEditItem)
  }

  onEducationUpdate(event:any){
    if(event.length >= 0){
      this.educationData = event;
    }
    let index = this.educationData.findIndex(education => education.id === event.id);
    this.educationData[index] = event;
  }

  displayDate(d1:string, d2:string){
    let startDate = new Date(d1.replace(/-/g, '\/')).toLocaleDateString();
    let endDate = Date.parse(d2.replace(/-/g, '\/'));
    const currentDate = Date.now();

    if(endDate <=  currentDate){
      return startDate + " - Current";
    }else{
      return startDate + " - " + new Date(endDate).toLocaleDateString();
    }
  }
  

}
