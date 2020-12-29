import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordEditDialogComponent } from './password-edit-dialog.component';

describe('PasswordEditDialogComponent', () => {
  let component: PasswordEditDialogComponent;
  let fixture: ComponentFixture<PasswordEditDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordEditDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
