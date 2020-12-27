import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../entities/user';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  private baseURL = 'http://localhost:5000/';

  constructor(private http: HttpClient) {}

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

  public deleteUser(user: User): Promise<void> {
    return this.deleteUserByUserid(user.id);
  }

  public deleteUserByUserid(userid: number): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.http.get<void>(this.baseURL + 'user/' + userid).subscribe(
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
