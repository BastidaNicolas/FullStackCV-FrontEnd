import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceModuleComponent } from './experience-module.component';

describe('ExperienceModuleComponent', () => {
  let component: ExperienceModuleComponent;
  let fixture: ComponentFixture<ExperienceModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienceModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienceModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
