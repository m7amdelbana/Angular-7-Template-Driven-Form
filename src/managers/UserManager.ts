import { Injectable } from '@angular/core';
import { User } from 'src/models/User';

@Injectable()
export class UserManager {
  private userKey = 'userObject';

  public store(content: User) {
    localStorage.setItem(this.userKey, JSON.stringify(content));
  }

  public retrieve() {
    const stored: User = JSON.parse(localStorage.getItem(this.userKey));
    if (!stored) {
      console.log('No user found.');
      return null;
    }
    return stored;
  }

  public getUserType() {
    const stored: User = JSON.parse(localStorage.getItem(this.userKey));
    if (!stored) {
      console.log('No user found.');
      return null;
    }
    return stored.userType;
  }

  public logOut() {
    localStorage.removeItem(this.userKey);
  }
}
