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
    this.educationServ.getData()
    .subscribe((data) => {
      this.educationData = data.education;
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
  }

  handleClick(){
    if(!this.isEdit){
      return 
    }
    this.isEditItem = !this.isEditItem
    console.log(this.isEditItem)
  }

}
