import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';
import { User } from '../entities/user';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {
  constructor(
    private http: HttpClient,
    private backendService: BackendService
  ) {}

  private user: User = null;
  private isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  private loggedInUser: BehaviorSubject<User> = new BehaviorSubject<User>(
    this.user
  );

  public login(username: string, password: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.backendService.getAllUser().then((users: User[]) => {
        const user = users.find((u: User) => u.username === username);
        const foundUser = user != null;

        if (foundUser) {
          this.loginUser(user);
          resolve();
        } else {
          reject();
        }
      });
    });
  }

  private loginUser(user: User): void {
    this.user = user;
    this.isAuthenticated.next(true);
    this.loggedInUser.next(this.user);
  }

  public async logout(): Promise<void> {
    this.isAuthenticated.next(false);
    this.loggedInUser.next(null);
    this.user = null;
  }

  public isLoggedIn(): boolean {
    return this.isAuthenticated.getValue();
  }

  public isLoggedInAsObservable(): Observable<boolean> {
    return this.isAuthenticated.asObservable();
  }

  public getLoggedInUser(): Observable<User> {
    return this.loggedInUser.asObservable();
  }
}
