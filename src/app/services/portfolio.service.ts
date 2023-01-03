import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http:HttpClient, private router:Router, private cookieService:CookieService) { }

  getToken(){
    return this.cookieService.get("token");
  }

  getProfile():Observable<any>{
    return this.http.get(`${environment.apiURL}/v1/profile/4`);
  }
  getExperience():Observable<any>{
    return this.http.get(`${environment.apiURL}/v1/experience`);
  }
  getEducation():Observable<any>{
    return this.http.get(`${environment.apiURL}/v1/education`);
  }
  getSkills():Observable<any>{
    return this.http.get(`${environment.apiURL}/v1/skill`);
  }
  getProjects():Observable<any>{
    return this.http.get(`${environment.apiURL}/v1/project`);
  }

  postProfile(bannerImg:File, profileImg:File, profileData:string, addLinks:string, deleteLinks:string){
    const token = this.getToken();
    let formData = new FormData();
      bannerImg ? formData.append('bannerImg', new File([bannerImg], bannerImg.name, {type: "multipart/form-data"})) : formData.append('bannerImg', new File([], "", {type: "multipart/form-data"}));
      profileImg ? formData.append('profileImg', new File([profileImg], profileImg.name, {type: "multipart/form-data"})) : formData.append('profileImg', new File([], "", {type: "multipart/form-data"}));
      formData.append('profile', new Blob([profileData], {type: "application/json"}));
      formData.append('addLinks', new Blob([addLinks], {type: "application/json"}));
      formData.append('deleteLinks', new Blob([deleteLinks], {type: "application/json"}));

    return this.http.put(`${environment.apiURL}/v1/profile`,formData, {headers: {'Authorization': `Bearer ${token}`}, responseType: 'text'});
  }

  postSkill(skill:any, image:File){
    const token = this.getToken();
    let formData = new FormData();
    image ? formData.append('imageUrl', new File([image], image.name, {type: "multipart/form-data"})) : formData.append('imageUrl', new File([], "", {type: "multipart/form-data"}));
    formData.append('skill', new Blob([JSON.stringify(skill)], {type: "application/json"}));

    if(skill.id) return this.http.put(`${environment.apiURL}/v1/skill/`+skill.id ,formData, {headers: {'Authorization': `Bearer ${token}`}, responseType: 'text'});
    
    return this.http.post(`${environment.apiURL}/v1/skill`,formData, {headers: {'Authorization': `Bearer ${token}`}, responseType: 'text'});
  }
  deleteSkill(id:number){
    const token = this.getToken();

    return this.http.delete(`${environment.apiURL}/v1/skill/`+id, {headers: {'Authorization': `Bearer ${token}`}, responseType: 'text'});
  }
  putSkills(skills:string){
    const token = this.getToken();

    return this.http.put(`${environment.apiURL}/v1/skill/list`, skills, {headers: {"Content-Type": "application/json", 'Authorization': `Bearer ${token}`}, responseType: 'text'})
  }

  postExperience(experience:any, image:File, addDescription:string, deleteDescription:string){
    const token = this.getToken();

    let formData = new FormData();
    image ? formData.append('imageUrl', new File([image], image.name, {type: "multipart/form-data"})) : formData.append('imageUrl', new File([], "", {type: "multipart/form-data"}));
    formData.append('experience', new Blob([JSON.stringify(experience)], {type: "application/json"}));
    
    if(experience.id){
      formData.append('addDescription', new Blob([addDescription], {type: "application/json"}));
      formData.append('deleteDescription', new Blob([deleteDescription], {type: "application/json"}));
    }else{
      formData.append('description', new Blob([addDescription], {type: "application/json"}));
    }

    if(experience.id) return this.http.put(`${environment.apiURL}/v1/experience` ,formData, {headers: {'Authorization': `Bearer ${token}`}, responseType: 'text'});

    return this.http.post(`${environment.apiURL}/v1/experience`,formData, {headers: {'Authorization': `Bearer ${token}`}, responseType: 'text'});
  }
  deleteExperience(id:number){
    const token = this.getToken();

    return this.http.delete(`${environment.apiURL}/v1/experience/`+id, {headers: {'Authorization': `Bearer ${token}`}, responseType: 'text'});
  }
  putExperience(experiences:string){
    const token = this.getToken();

    return this.http.put(`${environment.apiURL}/v1/experience/list`, experiences, {headers: {"Content-Type": "application/json", 'Authorization': `Bearer ${token}`}, responseType: 'text'})
  }

  postEducation(education:any, image:File){
    const token = this.getToken();

    let formData = new FormData();
    image ? formData.append('imageUrl', new File([image], image.name, {type: "multipart/form-data"})) : formData.append('imageUrl', new File([], "", {type: "multipart/form-data"}));
    formData.append('education', new Blob([JSON.stringify(education)], {type: "application/json"}));

    if(education.id) return this.http.put(`${environment.apiURL}/v1/education/`+education.id ,formData, {headers: {'Authorization': `Bearer ${token}`}, responseType: 'text'});
    
    return this.http.post(`${environment.apiURL}/v1/education`,formData, {headers: {'Authorization': `Bearer ${token}`}, responseType: 'text'});
  }
  deleteEducation(id:number){
    const token = this.getToken();

    return this.http.delete(`${environment.apiURL}/v1/education/`+id, {headers: {'Authorization': `Bearer ${token}`}, responseType: 'text'});
  }
  putEducation(education:string){
    const token = this.getToken();

    return this.http.put(`${environment.apiURL}/v1/education/list`, education, {headers: {"Content-Type": "application/json", 'Authorization': `Bearer ${token}`}, responseType: 'text'})
  }

  postProject(project:any, image:File){
    const token = this.getToken();

    let formData = new FormData();
    image ? formData.append('imageUrl', new File([image], image.name, {type: "multipart/form-data"})) : formData.append('imageUrl', new File([], "", {type: "multipart/form-data"}));
    formData.append('project', new Blob([JSON.stringify(project)], {type: "application/json"}));

    if(project.id) return this.http.put(`${environment.apiURL}/v1/project/`+project.id ,formData, {headers: {'Authorization': `Bearer ${token}`}, responseType: 'text'});
    
    return this.http.post(`${environment.apiURL}/v1/project`,formData, { headers: {'Authorization': `Bearer ${token}`},responseType: 'text'});
  }
  deleteProject(id:number){
    const token = this.getToken();

    return this.http.delete(`${environment.apiURL}/v1/project/`+id, {headers: {'Authorization': `Bearer ${token}`}, responseType: 'text'});
  }
  putProject(project:string){
    const token = this.getToken();

    return this.http.put(`${environment.apiURL}/v1/project/list`, project, {headers: {"Content-Type": "application/json", 'Authorization': `Bearer ${token}`}, responseType: 'text'})
  }

  postLogin(login:any){
    return this.http.post(`${environment.apiURL}/login`, login, {headers: {"Content-Type": "application/x-www-form-urlencoded"}, responseType: 'text'})
  }
}
