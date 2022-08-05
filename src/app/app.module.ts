import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router'
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { UserHeaderComponent } from './components/user-header/user-header.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { SkillzComponent } from './components/skillz/skillz.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginModalComponent } from './components/login-modal/login-modal.component';
import { ExperienceModuleComponent } from './components/experience-module/experience-module.component';

const routes: Routes = []

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserHeaderComponent,
    AboutComponent,
    ExperienceComponent,
    EducationComponent,
    SkillzComponent,
    ProjectsComponent,
    FooterComponent,
    LoginModalComponent,
    ExperienceModuleComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
