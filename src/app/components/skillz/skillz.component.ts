import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { Router } from '@angular/router';

@Component({
  selector: 'app-skillz',
  templateUrl: './skillz.component.html',
  styleUrls: ['./skillz.component.scss']
})
export class SkillzComponent implements OnInit {
  skills: Array<any> = [];
  isAdd:boolean=false;
  isEdit:boolean=false;
  hasBeenDraged:boolean=false;
  isRoute:Router;
  constructor(private portfolioService:PortfolioService, private router:Router) {
    this.isRoute = router
  }

  ngOnInit(): void {
    this.portfolioService.getSkills()
    .subscribe((data)=>{
      this.skills = data;
    })
  }

  handleEdit(){
    if(this.isEdit && this.hasBeenDraged){
      this.isEdit = false;
      this.portfolioService.putSkills(JSON.stringify(this.skills)).subscribe();
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

  drop(event: CdkDragDrop<any>) {
    this.skills[event.container.data.index].listPosition = event.previousContainer.data.index + 1;
    this.skills[event.previousContainer.data.index].listPosition = event.container.data.index + 1;

    this.skills[event.previousContainer.data.index] = event.container.data.item;
    this.skills[event.container.data.index] = event.previousContainer.data.item;
    this.hasBeenDraged = true;
  }

  onListChange(event:any){
    if(event.length >= 0){
      return this.skills = event;
    }
    let index = this.skills.findIndex(skill => skill.id === event.id);
    this.skills[index] = event;
  }

}
