import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects-module',
  templateUrl: './projects-module.component.html',
  styleUrls: ['./projects-module.component.scss']
})
export class ProjectsModuleComponent implements OnInit {
  addListItem:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

  handleAddListItem(){
    this.addListItem = !this.addListItem;
  }

}
