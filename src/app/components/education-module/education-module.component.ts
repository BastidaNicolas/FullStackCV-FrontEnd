import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-education-module',
  templateUrl: './education-module.component.html',
  styleUrls: ['./education-module.component.scss']
})
export class EducationModuleComponent implements OnInit {
  @Input() modalId:string = ''
  @Input() id:number = 0
  @Input() listPosition:number = 0
  @Input() name:string = ''
  @Input() title:string = ''
  @Input() about:string = ''
  @Input() initDate:string = ''
  @Input() endDate:string = ''
  @Input() image:string = 'c:/pepe.txt'
  @Input() listIndex:number = 0

  @Output() updateEducation = new EventEmitter<any>();

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
  }

  saveEducaction(image:any, name:string, title:string, startDate:string, endDate:string, about:string){
    let education = this.id !== 0 ? {
        "id":this.id,
        "listPosition": this.listPosition,
        "schoolName": name,
        "title": title,
        "startDate": startDate,
        "endDate": endDate,
        "about": about
    }:{
        "listPosition": this.listIndex + 1,
        "schoolName": name,
        "title": title,
        "startDate": startDate,
        "endDate": endDate,
        "about": about
    }
    this.portfolioService.postEducation(education, image[0]).subscribe(res => this.updateEducation.emit(JSON.parse(res)));
  }

  handleDeleteEducation(){
    if(confirm("You really wanna do this?")){
      return this.portfolioService.deleteEducation(this.id)
             .subscribe(res => this.updateEducation.emit(JSON.parse(res)));
     }
     return;
  }

}
