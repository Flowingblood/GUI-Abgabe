import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from 'src/app/entities/user';
import { AuthorizationService } from 'src/app/services/authorization.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-password-edit-dialog',
  templateUrl: './password-edit-dialog.component.html',
  styleUrls: ['./password-edit-dialog.component.scss']
})
export class PasswordEditDialogComponent implements OnInit {

  //Momentaner Nutzer
  currUser: User;

  //FormGroup welche die beiden PasswortInputFelder enthält
  passwordForm: FormGroup = new FormGroup({
    password: new FormControl('', [Validators.required]),
    passwordValidation: new FormControl('', [Validators.required]),
  });

  /**
   * Klassen Konstruktor
   * @param authService Service um den momentanen Nutzer zu ermitteln
   * @param currDialog Der momentane Dialog für schließ Aktionen
   * @param snackBar Pop-Up Snack Bar zur Information des Nutzers
   * @param userService Service zum Ändern des Nutzers
   */
  constructor(public authService: AuthorizationService, private currDialog: MatDialogRef<PasswordEditDialogComponent>, public snackBar: MatSnackBar,public userService: UserService) { 
    //Lässt das Dialog beim Klicken ausserhalb nicht schließen 
    currDialog.disableClose = true;
    this.currUser = this.authService.getCurrentLoggedInUser();
  }

  ngOnInit(): void {
  }

  /**
   * Schließt den momentanen Dialog
   */
  handleAbort(): void {
    this.currDialog.close(null);
  }

  /**
   * Prüft ob die Passwort Input felder ausgefüllt sind und übereinstimmen, wenn nicht wird der Nutzer darüber informiert mit einer SnackBar
   */
  handleSave(): void{
    if(this.passwordForm.get("password").value === "" || this.passwordForm.get("passwordValidation").value == ""){
      this.snackBar.open("Füllen Sie bitte alle Felder aus !","Okay");
    }
    else if(this.passwordForm.get("password").value === this.passwordForm.get("passwordValidation").value){
      this.currUser.password = this.passwordForm.get("password").value;
      this.userService.modifyUser(this.currUser);
      this.currDialog.close(null);
    }else{
      this.snackBar.open("Passwörter sind nicht gleich !","Okay");
    }
  }

  /**
   * Prüft ob die FormGroup der Passwörter einen Fehler hat
   * @param errorName Name des Fehlers
   * @param controlName Name der FormControlComponent.
   * @returns Boolean Gibt ein Boolean zurück, true wenn ein Fehler in der FormGroup enthalten ist
   */
  public hasError = (controlName: string, errorName: string): boolean => {
    return this.passwordForm.controls[controlName].hasError(errorName);
  }

}