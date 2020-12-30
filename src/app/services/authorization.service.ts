import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';
import { User } from '../entities/user';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {
  constructor(
    private backendService: BackendService,
    private router: Router
  ) {}

  // Aktuell angemeldet User
  private user: User = null;

  // Observable mit den Daten ob der User angemeldet ist oder nicht
  private isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  // Observable mit den Daten welche User angemeldet ist
  private loggedInUser: BehaviorSubject<User> = new BehaviorSubject<User>(
    this.user
  );

  /**
   * Die Methode ermöglicht das Anmelden mit Benutzername und Passwort.
   * Diese Methode sollte die Anmeldedaten an das Backend schickem und das Backend mit erfolgreich oder fehlgeschlagen antworten.
   * Da das Backend solche Funktionen nicht unterstützt wird dies hier Clientseitig nachgebildet.
   * @param username Benutzername zum Anmelden
   * @param password Passwort zum Anmelden
   */
  public login(username: string, password: string): Promise<User> {
    return new Promise<User>((resolve, reject) => {
      this.backendService
        .getAllUser()
        .then((users: User[]) => {
          const user = users.find(
            (u: User) => u.username === username // TODO && u.password === password
          );
          const foundUser = user != null;

          if (foundUser) {
            this.loginUser(user);
            resolve(user);
          } else {
            reject();
          }
        })
        .catch(() => console.error('Fehler bei der Abfrage aller User'));
    });
  }

  /**
   * Private Methode um den internen Anmeldezustand zu ändern.
   * @param user Neu angemeldeter Benutzer.
   */
  private loginUser(user: User): void {
    this.user = user;
    this.isAuthenticated.next(true);
    this.loggedInUser.next(this.user);
  }

  /**
   * Loggt den aktuell angemeldeten Benutzer aus und aktualisiert den internen Zustand.
   */
  public async logout(): Promise<void> {
    this.isAuthenticated.next(false);
    this.loggedInUser.next(null);
    this.user = null;
    this.router.navigate(['/login']);
  }

  /**
   * Gib zurück ob der Benutzer genau in dem Moment angemeldet ist oder nicht.
   */
  public isLoggedIn(): boolean {
    return this.isAuthenticated.getValue();
  }

  /**
   * Gibt den angemeldeten Zustand als Observable zurück.
   */
  public isLoggedInAsObservable(): Observable<boolean> {
    return this.isAuthenticated.asObservable();
  }

  /**
   * Gibt den angemeldeten User als Observable zurück.
   */
  public getLoggedInUser(): Observable<User> {
    return this.loggedInUser.asObservable();
  }

  /**
   * Gib zurück welcher Benutzer genau in dem Moment angemeldet ist oder nicht.
   */
  public getCurrentLoggedInUser(): User {
    return this.loggedInUser.getValue();
  }
}
