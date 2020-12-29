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

  currUser: User;

  passwordForm: FormGroup = new FormGroup({
    password: new FormControl('', [Validators.required]),
    passwordValidation: new FormControl('', [Validators.required]),
  });

  constructor(public authService: AuthorizationService, private currDialog: MatDialogRef<PasswordEditDialogComponent>, public snackBar: MatSnackBar,public userService: UserService) { 
    currDialog.disableClose = true;
    this.currUser = this.authService.getCurrentLoggedInUser();
  }

  ngOnInit(): void {
  }

  handleAbort(): void {
    this.currDialog.close(null);
  }

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
   * Checks if the form has an error.
   * @param errorName Name of the error.
   * @param controlName Name of the FormControlComponent.
   * @returns Boolean value true when the FormField has an error, false when not.
   */
  public hasError = (controlName: string, errorName: string): boolean => {
    return this.passwordForm.controls[controlName].hasError(errorName);
  }

}
