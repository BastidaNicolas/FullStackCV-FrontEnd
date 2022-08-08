import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  educationData:any;
  isAdd:boolean=false;
  isEdit:boolean=false;
  constructor(private educationServ : PortfolioService) { }

  ngOnInit(): void {
    this.educationServ.getData()
    .subscribe((data) => {
      this.educationData = data.education;
    })
  }

  handleEdit(){
    this.isEdit = !this.isEdit
  }
  handleAdd(){
    this.isAdd = !this.isAdd
  }

}
