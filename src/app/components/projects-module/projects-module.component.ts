import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-projects-module',
  templateUrl: './projects-module.component.html',
  styleUrls: ['./projects-module.component.scss']
})
export class ProjectsModuleComponent implements OnInit {
  addListItem:boolean=false;
  @Input() modalId:string = '';
  @Input() id:number = 0;
  @Input() name:string = '';
  @Input() about:string = '';
  @Input() repoLink:string = '';
  @Input() pageLink:string = '';
  @Input() listPosition:number = 0;
  @Input() techStack:string = '';
  @Input() listLength:number = 0;
  @Output() updateProjects = new EventEmitter<any>();

  techStackArr:Array<string> = [];
  

  constructor( private portfolioService:PortfolioService ) { }

  ngOnInit(): void {
    if(this.techStack !== ''){
      this.techStackArr = JSON.parse(this.techStack);
    }
  }

  handleAddListItem(){
    this.addListItem = !this.addListItem;
  }

  onAddTech(name:string){
    this.techStackArr.push(name);
  }
  onDeleteTech(name:string){
    this.techStackArr = [...this.techStackArr.filter(tech => tech !== name)];
  }

  onDeleteProject(){
    if(confirm("You really wanna do this?")){
      return this.portfolioService.deleteProject(this.id)
              .subscribe(res => this.updateProjects.emit(JSON.parse(res)))
     }
     return;
  }

  onSaveProject(file:any, name:string, about:string, repo:string, page:string){
    const tech = JSON.stringify(this.techStackArr)
    let project = this.id !== 0 ? {
      "id":this.id,
      "listPosition":this.listPosition,
      "name":name,
      "about":about,
      "pageUrl":page,
      "repoUrl":repo,
      "techStack":tech
    }:{
      "listPosition":this.listLength + 1,
      "name":name,
      "about":about,
      "pageUrl":page,
      "repoUrl":repo,
      "techStack":tech
    };

    this.portfolioService.postProject(project, file[0]).subscribe(res => this.updateProjects.emit(JSON.parse(res)))
  }

}
