import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/entities/user';
import { BackendService } from 'src/app/services/backend.service';
import { GoalAddDialogComponent } from '../goal-add-dialog/goal-add-dialog.component';
import { UserAddDialogComponent } from '../user-add-dialog/user-add-dialog.component';
import { UserDeleteDialogComponent } from '../user-delete-dialog/user-delete-dialog.component';
import { UserEditDialogComponent } from '../user-edit-dialog/user-edit-dialog.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  // Add Popupdialog
  addUserDialogRef: MatDialogRef<UserAddDialogComponent>;

  // Edit Popupdialog
  editUserDialogRef: MatDialogRef<UserEditDialogComponent>;

  // Delete Popupdialog
  deleteUserDialogRef: MatDialogRef<UserDeleteDialogComponent>;

  displayedColumns: string[] = [
    'id',
    'username',
    'firstname',
    'lastname',
    'actions',
  ];

  users: MatTableDataSource<User>;

  constructor(
    public backendService: BackendService,
    public userAddDialog: MatDialog,
    public userEditDialog: MatDialog,
    public userDeleteDialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.backendService.getAllUser().then((u) => {
      this.users = new MatTableDataSource(u);
      console.log(this.users.data);
    });
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.users.filter = filterValue.trim().toLowerCase();

    if (this.users.paginator) {
      this.users.paginator.firstPage();
    }
  }

  openAddUserDialog($event: any): void {
    $event.stopPropagation();
    this.addUserDialogRef = this.userAddDialog.open(UserAddDialogComponent);
    this.addUserDialogRef.afterClosed().subscribe((result) => {
      // TODO Update and database
    });
  }

  openEditUserDialog($event: any, user: User): void {
    $event.stopPropagation();
    this.editUserDialogRef = this.userEditDialog.open(UserEditDialogComponent);
    this.editUserDialogRef.componentInstance.user = user;
    this.editUserDialogRef.afterClosed().subscribe((result) => {
      // TODO Update and database
    });
  }

  openDeleteUserDialog($event: any, user: User): void {
    $event.stopPropagation();
    this.deleteUserDialogRef = this.userDeleteDialog.open(
      UserDeleteDialogComponent
    );
    this.deleteUserDialogRef.componentInstance.user = user;
    this.deleteUserDialogRef.afterClosed().subscribe((result) => {
      // TODO Update and database
    });
  }
}
