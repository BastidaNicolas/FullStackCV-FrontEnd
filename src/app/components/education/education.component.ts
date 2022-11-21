import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  educationData:any;
  isAdd:boolean=false;
  isEdit:boolean=false;
  isEditItem:boolean=false;
  constructor(private educationServ : PortfolioService) { }

  ngOnInit(): void {
    this.educationServ.getEducation()
    .subscribe((data) => {
      this.educationData = data;
    })
  }

  handleEdit(){
    this.isEdit = !this.isEdit
  }
  handleAdd(){
    this.isAdd = !this.isAdd
  }

  drop(event: CdkDragDrop<object[]>) {
    moveItemInArray(this.educationData, event.previousIndex, event.currentIndex);

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
