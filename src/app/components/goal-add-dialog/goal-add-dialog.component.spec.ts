import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalAddDialogComponent } from './goal-add-dialog.component';

describe('GoalAddDialogComponent', () => {
  let component: GoalAddDialogComponent;
  let fixture: ComponentFixture<GoalAddDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoalAddDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
