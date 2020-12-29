import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthorizationService } from 'src/app/services/authorization.service';

@Component({
  selector: 'app-password-edit-dialog',
  templateUrl: './password-edit-dialog.component.html',
  styleUrls: ['./password-edit-dialog.component.scss']
})
export class PasswordEditDialogComponent implements OnInit {

  passwordForm: FormGroup = new FormGroup({
    password: new FormControl('', [Validators.required]),
    passwordValidation: new FormControl('', [Validators.required]),
  });

  constructor(authService: AuthorizationService, private currDialog: MatDialogRef<PasswordEditDialogComponent>, public snackBar: MatSnackBar) { 
    currDialog.disableClose = true;
  }

  ngOnInit(): void {
  }

  handleAbort(): void {
    this.currDialog.close(null);
  }

  handleSave(): void{
    if(this.passwordForm.get("password").value === this.passwordForm.get("passwordValidation").value){
      //TODO
    }else{
      this.snackBar.open("Passwörter sind nicht gleich","Okay");
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
