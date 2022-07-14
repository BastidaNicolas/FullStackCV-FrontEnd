import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillzComponent } from './skillz.component';

describe('SkillzComponent', () => {
  let component: SkillzComponent;
  let fixture: ComponentFixture<SkillzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillzComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
