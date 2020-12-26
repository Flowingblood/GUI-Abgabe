import {  Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

/**
 * Used to be the central login for the project.
 */
export class LoginComponent implements OnInit {

  // Form Controlls
  private readonly username: string = 'username';
  private readonly password: string = 'password';


  /**
   * Creates a new FormGroup with all GUI components
   */
  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  /**
   * Creates an instance of the UserEditComponent.
   *
   * @param _router Route to the next page.
   * @param _authService AuthorizationService to check the credential data.
   */
  constructor(private _router: Router) { }

  /**
   * Initialize the component.
   */
  ngOnInit(): void {
  }

  /**
   * Checking if everything is valid in the form.
   * Checks if the credentials are correct or not.
   */
  async submit(): Promise<void>{
    
  }

  /**
   * Checks if the form has an error.
   * @param errorName Name of the error.
   * @param controlName Name of the FormControlComponent.
   * @returns Boolean value true when the FormField has an error, false when not.
   */
  public hasError = (controlName: string, errorName: string): boolean =>{
    return this.loginForm.controls[controlName].hasError(errorName);
  }

}
