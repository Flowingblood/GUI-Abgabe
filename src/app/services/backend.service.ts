import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../entities/user';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  private baseURL = 'http://localhost:5000/';

  constructor(private http: HttpClient) {}

  /**
   * Erstellt den User auf dem Backend
   * @param user neuer User
   */
  public createUser(user: User): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.http.post<void>(this.baseURL + 'user/create', user).subscribe(
        () => {
          resolve();
        },
        (error) => {
          console.error(error);
          reject();
        }
      );
    });
  }

  /**
   * Erstellt mehrere neue User auf dem Backend
   * @param users neue User Array
   */
  public createMultipleUsers(users: User[]): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.http
        .post<void>(this.baseURL + 'user/createWithList', users)
        .subscribe(
          () => {
            resolve();
          },
          (error) => {
            console.error(error);
            reject();
          }
        );
    });
  }

  /**
   * Gibt alle Benutzer vom Backend zurück
   */
  public getAllUser(): Promise<User[]> {
    return new Promise<User[]>((resolve, reject) => {
      this.http.get<User[]>(this.baseURL + 'user/all').subscribe(
        (data) => {
          resolve(data);
        },
        (error) => {
          console.error(error);
          reject();
        }
      );
    });
  }

  /**
   * Holt user handand der userid vom Backend und gibt diese zurück.
   * @param userid userid vom benötigten User
   */
  public getUserByUserid(userid: number): Promise<User> {
    return new Promise<User>((resolve, reject) => {
      this.http.get<User>(this.baseURL + 'user/' + userid).subscribe(
        (data) => {
          resolve(data);
        },
        (error) => {
          console.error(error);
          reject();
        }
      );
    });
  }

  /**
   * Updated den user auf dem Backend
   * @param user betroffener user
   */
  public updateUser(user: User): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.http.put<void>(this.baseURL + 'user/' + user.id, user).subscribe(
        (data) => {
          resolve(data);
        },
        (error) => {
          console.error(error);
          reject();
        }
      );
    });
  }

  /**
   * Löscht den user auf dem Backend
   * @param user Zu löschender User
   */
  public deleteUser(user: User): Promise<void> {
    return this.deleteUserByUserid(user.id);
  }

  /**
   * Löscht den user anhand der Userid auf dem Backend
   * @param user userid vom zu löschenden Benutzer
   */
  public deleteUserByUserid(userid: number): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.http.delete<void>(this.baseURL + 'user/' + userid).subscribe(
        (data) => {
          resolve(data);
        },
        (error) => {
          console.error(error);
          reject();
        }
      );
    });
  }
}
