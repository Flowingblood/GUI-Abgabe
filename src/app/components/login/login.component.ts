import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthorizationService } from '../../services/authorization.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})


export class LoginComponent implements OnInit {

  // Form Controlls
  private readonly username: string = 'username';
  private readonly password: string = 'password';

  //Boolscher Wert der Übertragung
  pendingRequest = false;

  /**
   * Eine neue FormGroup welche die beiden Inputfelder Username und Passwort enthält
   */
  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  /**
   * Klassen Konstrukter
   *
   * @param router Routet zur nächsten Seite
   * @param authorizationService Service zum herauffinden des momentanen Nutzers
   */
  constructor(
    private router: Router,
    private authorizationService: AuthorizationService,
  ) {}

  ngOnInit(): void {}

  //TODO
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
        .then((user) => {
          this.router.navigate(['/goals', user.id]);
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
   * Prüft ob die FormGroup einen Fehler hat
   * @param errorName Name des Fehlers
   * @param controlName Name der FormControlComponent.
   * @returns Boolean Gibt ein Boolean zurück, true wenn ein Fehler in der FormGroup enthalten ist
   */
  public hasError = (controlName: string, errorName: string): boolean => {
    return this.loginForm.controls[controlName].hasError(errorName);
  }
}
