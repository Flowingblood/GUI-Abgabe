import {  Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { AuthorizationService } from '../../services/authorization.service';
import { BackendService } from '../../services/backend.service';
import { Goal } from '../../entities/goal';
import { GoalServiceService } from '../../services/goal-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

/**
 * Used to be the central login for the project.
 */
export class LoginComponent implements OnInit {
  // Form Controlls
  private readonly username: string = 'username';
  private readonly password: string = 'password';

  pendingRequest = false;

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
   */
  constructor(
    private router: Router,
    private authorizationService: AuthorizationService,
    private backendService: BackendService,
    private goalService: GoalServiceService
  ) {}

  /**
   * Initialize the component.
   */
  ngOnInit(): void {}

  /**
   * Checking if everything is valid in the form.
   * Checks if the credentials are correct or not.
   */
  async submit(): Promise<void> {
    if (this.loginForm.valid) {
      this.pendingRequest = true;
      this.authorizationService
        .login(
          this.loginForm.controls[this.username].value,
          this.loginForm.controls[this.password].value
        )
        .then(() => {
          this.router.navigate(['/goals']);
        })
        .catch(() => {
          this.loginForm.controls[this.password].setErrors({
            invalid: 'Credentials not correct',
          });
        })
        .finally(() => (this.pendingRequest = false));
    }
  }

  /**
   * Checks if the form has an error.
   * @param errorName Name of the error.
   * @param controlName Name of the FormControlComponent.
   * @returns Boolean value true when the FormField has an error, false when not.
   */
  public hasError = (controlName: string, errorName: string): boolean => {
    return this.loginForm.controls[controlName].hasError(errorName);
  };
}
