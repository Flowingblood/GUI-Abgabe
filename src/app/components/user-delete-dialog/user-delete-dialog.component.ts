import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/app/entities/user';

@Component({
  selector: 'app-user-delete-dialog',
  templateUrl: './user-delete-dialog.component.html',
  styleUrls: ['./user-delete-dialog.component.scss']
})
export class UserDeleteDialogComponent implements OnInit {

  //Der zu löschende Nutzer
  user: User;

  /**
   * Klassen Konstruktor
   * @param currDialog der momentane Dailog zum schließen
   */
  constructor(private currDialog: MatDialogRef<UserDeleteDialogComponent>) {
    //Lässt das Dialog beim Klicken ausserhalb nicht schließen 
    currDialog.disableClose = true;
  }
  ngOnInit(): void {
  }

  /**
   * Schließt den momentanen Dialog und gibt den Nutzer weiter
   */
  handleDelete(): void {
    this.currDialog.close(this.user);
  }

  /**
   * Schließt den momentanen Dialog und gibt Null weiter
   */
  handleAbort(): void {
    this.currDialog.close(null);
  }

}
