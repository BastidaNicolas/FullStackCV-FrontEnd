import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-education-module',
  templateUrl: './education-module.component.html',
  styleUrls: ['./education-module.component.scss']
})
export class EducationModuleComponent implements OnInit {
  @Input() modalId:string = ''
  @Input() name:string = ''
  @Input() about:string = ''
  @Input() initDate:string = ''
  @Input() endDate:string = ''
  @Input() image:string = 'c:/pepe.txt'

  constructor() { }

  ngOnInit(): void {
  }

}
