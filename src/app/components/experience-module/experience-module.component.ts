import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience-module',
  templateUrl: './experience-module.component.html',
  styleUrls: ['./experience-module.component.scss']
})
export class ExperienceModuleComponent implements OnInit {
  addListItem:boolean=false;
  @Input() modalId:string = ''
  @Input() jobTitle:string = ''
  @Input() company:string = ''
  @Input() about:Array<any> = []
  @Input() initDate:string = ''
  @Input() endDate:string = ''
  constructor() { }

  ngOnInit(): void {
  }

  handleAddListItem(){
    this.addListItem = !this.addListItem;
  }

}
