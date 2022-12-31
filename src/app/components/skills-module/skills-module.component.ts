import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-skills-module',
  templateUrl: './skills-module.component.html',
  styleUrls: ['./skills-module.component.scss']
})
export class SkillsModuleComponent implements OnInit {
  @Input() modalId:string = '';
  @Input() id:number = 0;
  @Input() name:string = '';
  @Input() listPosition:number = 0;
  @Input() listLength:number = 0;
  @Output() updateList = new EventEmitter<any>();

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
  }

  saveSkill(image:any, name:string){
    let skill = this.id ? {
        id: this.id,
        listPosition: this.listPosition,
        name: name,
    }:{
      listPosition: this.listLength + 1,
      name: name,
    };
    this.portfolioService.postSkill(skill, image[0])
    .subscribe(res => this.updateList.emit(JSON.parse(res)));
  }

  deleteSkill(){
    if(confirm("Wanna delete dis? Really?")){
      return this.portfolioService.deleteSkill(this.id)
      .subscribe(res => this.updateList.emit(JSON.parse(res)));
    }
    return;
  }
}
