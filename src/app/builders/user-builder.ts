import { User } from '../entities/user';

export class UserBuilder {
  private readonly user: User;

  constructor() {
    this.user = {
      id: 0,
      username: '',
      firstName: 'Neu',
      lastName: 'Kunde',
      password: 'TODOTrainNew',
      scopeList: [],
      permission: false,
    };
  }

  username(username: string): UserBuilder {
    this.user.username = username;
    return this;
  }

  firstname(firstname: string): UserBuilder {
    this.user.firstName = firstname;
    return this;
  }

  lastname(lastname: string): UserBuilder {
    this.user.lastName = lastname;
    return this;
  }

  password(password: string): UserBuilder {
    this.user.password = password;
    return this;
  }

  permission(permission: boolean): UserBuilder {
    this.user.permission = permission;
    return this;
  }

  isTrainer(): UserBuilder {
    this.user.permission = true;
    return this;
  }

  isCustomer(): UserBuilder {
    this.user.permission = false;
    return this;
  }

  build(): User {
    if (this.user.username.length === 0) {
      this.user.username =
        this.user.firstName.substring(0, 1) + this.user.lastName;
    }
    return this.user;
  }
}
