import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projectsData: Array<any> = [];
  isAdd: boolean = false;
  isEdit: boolean = false;
  isRoute:Router;
  hasBeenDraged: boolean = false;
  isUrl:String=environment.apiURL;
  constructor(private portfolioService: PortfolioService, private router:Router) {
    this.isRoute = router;
  }

  ngOnInit(): void {
    this.portfolioService.getProjects()
      .subscribe((data) => {
        this.projectsData = data
      })
  }

  handleEdit() {
    if (this.hasBeenDraged && this.isEdit) {
      const newProjectData = []
      for (let project of this.projectsData) {
        newProjectData.push(
          {
            "id": project.id,
            "listPosition": project.listPosition,
            "name": project.name,
            "about": project.about,
            "imageUrl": project.imageUrl,
            "pageUrl": project.pageUrl,
            "repoUrl": project.repoUrl,
            "techStack": project.technologies
          }
        )
      }
      this.isEdit = false;
      this.portfolioService.putProject(JSON.stringify(newProjectData)).subscribe();
      this.hasBeenDraged = false;
      return;
    }
    this.isEdit = !this.isEdit
  }
  handleAdd() {
    this.isAdd = !this.isAdd
  }

  handleClick() {
    if (!this.isEdit) {
      return
    }
  }

  drop(event: CdkDragDrop<object[]>) {
    moveItemInArray(this.projectsData, event.previousIndex, event.currentIndex);

    for (let project of this.projectsData) {
      project.listPosition = this.projectsData.findIndex(pro => pro.id === project.id) + 1;
    }

    this.hasBeenDraged = true;
  }

  onProjectUpdate(event: any) {
    if (event.length >= 0) {
      this.projectsData = event;
    }
    let index = this.projectsData.findIndex(project => project.id === event.id);
    this.projectsData[index] = event;
  }

}
