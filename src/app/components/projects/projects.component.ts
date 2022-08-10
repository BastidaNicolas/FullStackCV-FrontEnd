import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projectsData:any;  
  isAdd:boolean=false;
  isEdit:boolean=false;
  constructor(private projectServ:PortfolioService) { }

  ngOnInit(): void {
    this.projectServ.getData()
    .subscribe((data) => {
      this.projectsData = data.projects
    })
  }

  handleEdit(){
    this.isEdit = !this.isEdit
  }
  handleAdd(){
    this.isAdd = !this.isAdd
  }

  drop(event: CdkDragDrop<object[]>) {
    moveItemInArray(this.projectsData, event.previousIndex, event.currentIndex);
  }

}
