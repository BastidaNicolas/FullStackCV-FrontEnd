import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills-module',
  templateUrl: './skills-module.component.html',
  styleUrls: ['./skills-module.component.scss']
})
export class SkillsModuleComponent implements OnInit {
  @Input() modalId:string = ''
  @Input() name:string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
