import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsModuleComponent } from './skills-module.component';

describe('SkillsModuleComponent', () => {
  let component: SkillsModuleComponent;
  let fixture: ComponentFixture<SkillsModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
