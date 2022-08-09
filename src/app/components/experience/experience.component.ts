import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

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

  drop(event: CdkDragDrop<object[]>) {
    moveItemInArray(this.experienceData, event.previousIndex, event.currentIndex);
  }

}
