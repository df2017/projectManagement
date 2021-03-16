import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectAbmComponent } from './project-abm.component';

describe('ProjectAbmComponent', () => {
  let component: ProjectAbmComponent;
  let fixture: ComponentFixture<ProjectAbmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectAbmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectAbmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
