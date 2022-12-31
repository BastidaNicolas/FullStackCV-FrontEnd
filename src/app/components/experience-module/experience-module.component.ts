import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { mergeMap } from 'rxjs';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-experience-module',
  templateUrl: './experience-module.component.html',
  styleUrls: ['./experience-module.component.scss']
})
export class ExperienceModuleComponent implements OnInit {
  addListItem:boolean=false;
  @Input() modalId:string = ''
  @Input() id:number = 0;
  @Input() listPosition:number = 0;
  @Input() jobTitle:string = ''
  @Input() company:string = ''
  @Input() about:Array<any> = []
  @Input() initDate:string = ''
  @Input() endDate:string = ''
  @Input() listLength:number = 0

  @Output() updateExperience = new EventEmitter<any>();

  deleteDescription:Array<any> = []

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
  }

  handleAddListItem(){
    this.addListItem = !this.addListItem;
  }

  
  handleAddDesc(description: string){
    this.id !== 0 ? this.about.push({"description": description, "experience": {"id": this.id}}) : this.about.push({"description": description});
  }
  handleDeleteDesc(name: string){
    this.deleteDescription = [...this.deleteDescription, ...this.about.filter(desc => desc.description === name)];
    this.about = this.about.filter(disc => disc.description !== name);
  }

  handleDeleteExperience(){
    if(confirm("You really wanna do this?")){
     return this.portfolioService.deleteExperience(this.id)
            .subscribe(res => this.updateExperience.emit(JSON.parse(res)));
    }
    return;
  }

  //Make a call to the backend to save the things and after response do a Get request. Or maybe change the backend to make the experiance set the description
  saveExperience(image: any, jobTitle: string, companyName: string, startDate: string, endDate: string){
    const experience = this.id !== 0 ? {
      "id": this.id,
      "listPosition": this.listPosition,
      "companyName": companyName,
      "jobTitle": jobTitle,
      "startDate": startDate,
      "endDate": endDate,
    }:{
      "listPosition": this.listLength + 1,
      "companyName": companyName,
      "jobTitle": jobTitle,
      "startDate": startDate,
      "endDate": endDate,
    }

    //POST to create the link, if it doesn't contain an ID
    const addDescription = this.about.filter(description => !description.id);
    //fileters the deleteLinks array to only contain links that have an id and sends it to the backend
    const delDescription = this.deleteDescription.filter(description => description.id);

    // console.log(experiance, addDescription, delDescription, image[0])

    this.portfolioService.postExperience(experience, image[0], JSON.stringify(addDescription), JSON.stringify(delDescription))
    .pipe(mergeMap(res => this.portfolioService.getExperience())).subscribe(res => this.updateExperience.emit(res));
    this.deleteDescription = [];
  }

}
