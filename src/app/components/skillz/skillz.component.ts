import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-skillz',
  templateUrl: './skillz.component.html',
  styleUrls: ['./skillz.component.scss']
})
export class SkillzComponent implements OnInit {
  skills:any;
  isAdd:boolean=false;
  isEdit:boolean=false;
  constructor(private skillsServ:PortfolioService) { }

  ngOnInit(): void {
    this.skillsServ.getData()
    .subscribe((data)=>{
      this.skills = data.skills;
    })
  }

  handleEdit(){
    this.isEdit = !this.isEdit
    console.log(this.skills)
  }
  handleAdd(){
    this.isAdd = !this.isAdd
  }

  drop(event: CdkDragDrop<any>) {
    this.skills[event.previousContainer.data.index] = event.container.data.item;
    this.skills[event.container.data.index] = event.previousContainer.data.item;
  }


}
