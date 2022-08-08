import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projectsData:any;  
  isAdd:boolean=false;
  isEdit:boolean=false;
  constructor(private projectServ:PortfolioService) { }

  ngOnInit(): void {
    this.projectServ.getData()
    .subscribe((data) => {
      this.projectsData = data.projects
    })
  }

  handleEdit(){
    this.isEdit = !this.isEdit
  }
  handleAdd(){
    this.isAdd = !this.isAdd
  }


}
