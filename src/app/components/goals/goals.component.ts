import { Component, OnInit } from '@angular/core';
import { GoalEditDialogComponent } from '../goal-edit-dialog/goal-edit-dialog.component';
import {MatDialog,} from '@angular/material/dialog';
import { UserEditDialogComponent } from '../user-edit-dialog/user-edit-dialog.component';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss']
})
export class GoalsComponent implements OnInit {
  

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {


    const dialogRef = this.dialog.open(UserEditDialogComponent, {
      
    });

  }

}
