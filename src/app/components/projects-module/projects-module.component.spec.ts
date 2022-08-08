import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsModuleComponent } from './projects-module.component';

describe('ProjectsModuleComponent', () => {
  let component: ProjectsModuleComponent;
  let fixture: ComponentFixture<ProjectsModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});