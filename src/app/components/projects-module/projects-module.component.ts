import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects-module',
  templateUrl: './projects-module.component.html',
  styleUrls: ['./projects-module.component.scss']
})
export class ProjectsModuleComponent implements OnInit {
  addListItem:boolean=false;
  @Input() modalId:string = '';
  @Input() name:string = '';
  @Input() about:string = '';
  @Input() repoLink:string = '';
  @Input() pageLink:string = '';
  @Input() techStack:Array<any> = [];
  constructor() { }

  ngOnInit(): void {
  }

  handleAddListItem(){
    this.addListItem = !this.addListItem;
  }

}
