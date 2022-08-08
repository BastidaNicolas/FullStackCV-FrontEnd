import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileModuleComponent } from './profile-module.component';

describe('ProfileModuleComponent', () => {
  let component: ProfileModuleComponent;
  let fixture: ComponentFixture<ProfileModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
