import { Injectable } from '@angular/core';
import { User } from '../entities/user';
import { IdService } from './id.service';
import { BackendService } from './backend.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private idService: IdService,
    private backendService: BackendService
  ) {}

  public getAllUser(): Promise<User[]> {
    return this.backendService.getAllUser();
  }

  public getUserByUserid(userid: number): Promise<User> {
    return this.backendService.getUserByUserid(userid);
  }

  public async createUser(user: User): Promise<User> {
    user.scopeList = [];
    user.id = this.idService.getNewUserId(await this.getAllUser());
    this.backendService.createUser(user);
    return user;
  }

  public modifyUser(user: User): void {
    this.backendService.updateUser(user);
  }

  public delete(user: User): void {
    this.backendService.deleteUser(user);
  }
}
