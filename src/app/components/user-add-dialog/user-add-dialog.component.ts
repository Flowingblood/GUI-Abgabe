import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/app/entities/user';
import { UserBuilder } from '../../builders/user-builder';

@Component({
  selector: 'app-user-add-dialog',
  templateUrl: './user-add-dialog.component.html',
  styleUrls: ['./user-add-dialog.component.scss'],
})
export class UserAddDialogComponent implements OnInit {

  //Alle Informationen des Nutzers
  username: string;
  firstName: string;
  lastName: string;
  password: string;
  admin: boolean;

  /**
   * Klassen Konstruktor
   * @param currDialog  der momentane Dialog für schließ Aktionen
   */
  constructor(private currDialog: MatDialogRef<UserAddDialogComponent>) {
    //Lässt das Dialog beim Klicken ausserhalb nicht schließen 
    currDialog.disableClose = true;
  }

  ngOnInit(): void {}

  /**
   * Prüft ob alle Eingaben vollständig sind und erstellt einen Nutzer mit diesen,
   * gibt diesen dann weiter
   */
  handleSave(): void {
    if (
      this.username.length !== 0 &&
      this.firstName.length !== 0 &&
      this.lastName.length !== 0 &&
      this.password.length !== 0
    ) {
      const user: User = new UserBuilder()
        .username(this.username)
        .firstname(this.firstName)
        .lastname(this.lastName)
        .password(this.password)
        .permission(this.admin)
        .build();

      this.currDialog.close(user);
    }
  }

  /**
   * Schließt den momentanen Dialog
   */
  handleAbort(): void {
    this.currDialog.close(null);
  }
}
