import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http:HttpClient, private router:Router) { }

  getData():Observable<any>{
    return this.http.get('assets/data/data.json');
  }

  getProfile():Observable<any>{
    return this.http.get('http://localhost:8080/v1/profile/4');
  }
  getExperience():Observable<any>{
    return this.http.get('http://localhost:8080/v1/experience');
  }
  getEducation():Observable<any>{
    return this.http.get('http://localhost:8080/v1/education');
  }
  getSkills():Observable<any>{
    return this.http.get('http://localhost:8080/v1/skill');
  }
  getProjects():Observable<any>{
    return this.http.get('http://localhost:8080/v1/project');
  }

  postProfile(bannerImg:File, profileImg:File, profileData:string, addLinks:string, deleteLinks:string){
    let formData = new FormData();
      bannerImg ? formData.append('bannerImg', new File([bannerImg], bannerImg.name, {type: "multipart/form-data"})) : formData.append('bannerImg', new File([], "", {type: "multipart/form-data"}));
      profileImg ? formData.append('profileImg', new File([profileImg], profileImg.name, {type: "multipart/form-data"})) : formData.append('profileImg', new File([], "", {type: "multipart/form-data"}));
      formData.append('profile', new Blob([profileData], {type: "application/json"}));
      formData.append('addLinks', new Blob([addLinks], {type: "application/json"}));
      formData.append('deleteLinks', new Blob([deleteLinks], {type: "application/json"}));

    return this.http.put('http://localhost:8080/v1/profile',formData, {responseType: 'text'});
  }

  postSkill(skill:any, image:File){
    let formData = new FormData();
    image ? formData.append('imageUrl', new File([image], image.name, {type: "multipart/form-data"})) : formData.append('imageUrl', new File([], "", {type: "multipart/form-data"}));
    formData.append('skill', new Blob([JSON.stringify(skill)], {type: "application/json"}));

    if(skill.id) return this.http.put('http://localhost:8080/v1/skill/'+skill.id ,formData, {responseType: 'text'});
    
    return this.http.post('http://localhost:8080/v1/skill',formData, {responseType: 'text'});
  }
  deleteSkill(id:number){
    return this.http.delete('http://localhost:8080/v1/skill/'+id, {responseType: 'text'});
  }
  putSkills(skills:string){
    return this.http.put('http://localhost:8080/v1/skill/list', skills, {headers: {"Content-Type": "application/json"}, responseType: 'text'})
  }

  postExperience(experience:any, image:File, addDescription:string, deleteDescription:string){
    let formData = new FormData();
    image ? formData.append('imageUrl', new File([image], image.name, {type: "multipart/form-data"})) : formData.append('imageUrl', new File([], "", {type: "multipart/form-data"}));
    formData.append('experience', new Blob([JSON.stringify(experience)], {type: "application/json"}));
    
    if(experience.id){
      formData.append('addDescription', new Blob([addDescription], {type: "application/json"}));
      formData.append('deleteDescription', new Blob([deleteDescription], {type: "application/json"}));
    }else{
      formData.append('description', new Blob([addDescription], {type: "application/json"}));
    }

    if(experience.id) return this.http.put('http://localhost:8080/v1/experience' ,formData, {responseType: 'text'});

    return this.http.post('http://localhost:8080/v1/experience',formData, {responseType: 'text'});
  }
  deleteExperience(id:number){
    return this.http.delete('http://localhost:8080/v1/experience/'+id, {responseType: 'text'});
  }
  putExperience(experiences:string){
    return this.http.put('http://localhost:8080/v1/experience/list', experiences, {headers: {"Content-Type": "application/json"}, responseType: 'text'})
  }

  postEducation(education:any, image:File){
    let formData = new FormData();
    image ? formData.append('imageUrl', new File([image], image.name, {type: "multipart/form-data"})) : formData.append('imageUrl', new File([], "", {type: "multipart/form-data"}));
    formData.append('education', new Blob([JSON.stringify(education)], {type: "application/json"}));

    if(education.id) return this.http.put('http://localhost:8080/v1/education/'+education.id ,formData, {responseType: 'text'});
    
    return this.http.post('http://localhost:8080/v1/education',formData, {responseType: 'text'});
  }
  deleteEducation(id:number){
    return this.http.delete('http://localhost:8080/v1/education/'+id, {responseType: 'text'});
  }
  putEducation(education:string){
    return this.http.put('http://localhost:8080/v1/education/list', education, {headers: {"Content-Type": "application/json"}, responseType: 'text'})
  }

  postProject(project:any, image:File){
    let formData = new FormData();
    image ? formData.append('imageUrl', new File([image], image.name, {type: "multipart/form-data"})) : formData.append('imageUrl', new File([], "", {type: "multipart/form-data"}));
    formData.append('project', new Blob([JSON.stringify(project)], {type: "application/json"}));

    if(project.id) return this.http.put('http://localhost:8080/v1/project/'+project.id ,formData, {responseType: 'text'});
    
    return this.http.post('http://localhost:8080/v1/project',formData, {responseType: 'text'});
  }
  deleteProject(id:number){
    return this.http.delete('http://localhost:8080/v1/project/'+id, {responseType: 'text'});
  }
  putProject(project:string){
    return this.http.put('http://localhost:8080/v1/project/list', project, {headers: {"Content-Type": "application/json"}, responseType: 'text'})
  }
}
