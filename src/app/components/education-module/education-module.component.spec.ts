import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationModuleComponent } from './education-module.component';

describe('EducationModuleComponent', () => {
  let component: EducationModuleComponent;
  let fixture: ComponentFixture<EducationModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
