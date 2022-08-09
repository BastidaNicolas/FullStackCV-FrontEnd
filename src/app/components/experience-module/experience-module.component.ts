import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience-module',
  templateUrl: './experience-module.component.html',
  styleUrls: ['./experience-module.component.scss']
})
export class ExperienceModuleComponent implements OnInit {
  addListItem:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

  handleAddListItem(){
    this.addListItem = !this.addListItem;
  }

}
