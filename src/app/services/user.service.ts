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

  /**
   * Gibt alle User vom Backend zurück
   */
  public getAllUser(): Promise<User[]> {
    return this.backendService.getAllUser();
  }

  /**
   * Gibt einen User anhand der Userid zurück
   * @param userid userid vom benötigten User
   */
  public getUserByUserid(userid: number): Promise<User> {
    return this.backendService.getUserByUserid(userid);
  }

  /**
   * Erstellt den User auf dem Backend
   * @param user neuer User
   */
  public async createUser(user: User): Promise<User> {
    user.scopeList = [];
    user.id = this.idService.getNewUserId(await this.getAllUser());
    this.backendService.createUser(user);
    return user;
  }

  /**
   * Updated den user auf dem Backend
   * @param user betroffener user
   */
  public modifyUser(user: User): void {
    this.backendService.updateUser(user);
  }

  /**
   * Löscht den user auf dem Backend
   * @param user Zu löschender User
   */
  public delete(user: User): void {
    this.backendService.deleteUser(user);
  }
}
