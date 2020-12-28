import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/entities/user';
import { BackendService } from 'src/app/services/backend.service';
import { UserAddDialogComponent } from '../user-add-dialog/user-add-dialog.component';
import { UserDeleteDialogComponent } from '../user-delete-dialog/user-delete-dialog.component';
import { UserEditDialogComponent } from '../user-edit-dialog/user-edit-dialog.component';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

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
    public userDeleteDialog: MatDialog,
    private userService: UserService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.backendService.getAllUser().then((u) => {
      this.users = new MatTableDataSource(u);
    });
  }

  private addUserToTable(user: User): void {
    this.users.data.push(user);
    console.log(this.users.data);
    this.users.filter = '';
  }

  private removeUserFromTable(user: User): void {
    this.users.data = this.users.data.filter((u) => u.id !== user.id);
    console.log(this.users.data);
    this.users.filter = '';
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
      if (result != null) {
        this.userService
          .createUser(result)
          .then(() => this.addUserToTable(result));
      }
    });
  }

  openEditUserDialog($event: any, user: User): void {
    $event.stopPropagation();
    this.editUserDialogRef = this.userEditDialog.open(UserEditDialogComponent);
    this.editUserDialogRef.componentInstance.user = user;
    this.editUserDialogRef.afterClosed().subscribe((result) => {
      if (result != null) {
        this.userService.modifyUser(result);
      }
    });
  }

  openDeleteUserDialog($event: any, user: User): void {
    $event.stopPropagation();
    this.deleteUserDialogRef = this.userDeleteDialog.open(
      UserDeleteDialogComponent
    );
    this.deleteUserDialogRef.componentInstance.user = user;
    this.deleteUserDialogRef.afterClosed().subscribe((result) => {
      if (result != null) {
        this.userService.delete(user);
        this.removeUserFromTable(user);
      }
    });
  }

  openUserGoals($event: any, user: User): void {
    $event.stopPropagation();
    this.router.navigate(['/goals', user.id]);
  }
}
