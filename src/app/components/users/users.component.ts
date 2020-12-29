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
import { GoalServiceService } from '../../services/goal-service.service';

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

  //Zeiele welche in der Tabelle angezeigt werden
  displayedColumns: string[] = [
    'id',
    'username',
    'firstname',
    'lastname',
    'status',
    'percent',
    'actions',
  ];

  //Container der Daten welche in der Tabelle angezeigt werden
  users: MatTableDataSource<User>;

  /**
   * Klassen Konstruktor
   * @param backendService Service zum ermitteln aller Nutzer
   * @param userAddDialog Dialog zum Hinzufügen von Nutzern
   * @param userEditDialog Dialog zum Bearbeiten von Nutzern
   * @param userDeleteDialog Dialog zum Löschen von Nutzern
   * @param userService Nutzer Service zum bearbeiten des Nutzers
   * @param router Router zum routen zwischen den Komponenten
   * @param goalService Service zum bearbeiten der Ziele
   */
  constructor(
    public backendService: BackendService,
    public userAddDialog: MatDialog,
    public userEditDialog: MatDialog,
    public userDeleteDialog: MatDialog,
    private userService: UserService,
    private router: Router,
    public goalService: GoalServiceService,
  ) {}

  /**
   * Setzt die Tabellen daten in den Container und ermittelt die Prozentzahl
   */
  ngOnInit(): void {
    this.backendService.getAllUser().then((u) => {
      this.users = new MatTableDataSource(u);
      this.goalService.getPercentNumberFromUser(u[0]);
    });
  }

  /**
   * Fügt Nutzer zur Tabelle hinzu
   * @param user Nutzer welcher in die Tabelle hinzugefügt wird
   */
  private addUserToTable(user: User): void {
    this.users.data.push(user);
    console.log(this.users.data);
    this.users.filter = '';
  }

  /**
   * Entfernt einen Nutzer von der Tabelle
   * @param user Nutzer welcher von die Tabelle entfernt wird
   */
  private removeUserFromTable(user: User): void {
    this.users.data = this.users.data.filter((u) => u.id !== user.id);
    console.log(this.users.data);
    this.users.filter = '';
  }

  /**
   * Aktualisiert die Tabelle bezüglich darauf welcher Text in der Suche eingegeben wurde,
   * passiert bei jedem KeyPress
   * @param event Event welches übergeben wird
   */
  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.users.filter = filterValue.trim().toLowerCase();

    if (this.users.paginator) {
      this.users.paginator.firstPage();
    }
  }

  /**
   * Öffnet den Nutzer hinzufügen Dialog
   * @param $event Event welches übergeben wird
   */
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

  /**
   * Öffnet den Nutzer bearbeiten Dialog
   * @param $event Event welches übergeben wird
   */
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

  /**
   * Öffnet den Nutzer löschen Dialog
   * @param $event Event welches übergeben wird
   */
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

  /**
   * Navigiert den Nutzer auf die Goals Komponente
   * @param $event Event welches übergeben wird
   * @param user Der Nutzer zu welchem die Ziele gehören
   */
  openUserGoals($event: any, user: User): void {
    $event.stopPropagation();
    this.router.navigate(['/goals', user.id]);
  }
}
