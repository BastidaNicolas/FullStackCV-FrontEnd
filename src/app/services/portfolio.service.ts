import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http:HttpClient) { }

  getData():Observable<any>{
    return this.http.get('assets/data/data.json');
  }

  getProfile():Observable<any>{
    return this.http.get('http://localhost:8080/v1/profile/1');
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

}
