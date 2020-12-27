import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalEditDialogComponent } from './goal-edit-dialog.component';

describe('GoalEditDialogComponent', () => {
  let component: GoalEditDialogComponent;
  let fixture: ComponentFixture<GoalEditDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoalEditDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});