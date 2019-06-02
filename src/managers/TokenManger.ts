import { Injectable } from '@angular/core';
import { Token } from 'src/models/Token';

@Injectable()
export class TokenManager {
  private tokenKey = 'accessToekn';

  public store(content: Token) {
    localStorage.setItem(this.tokenKey, JSON.stringify(content));
  }

  public retrieve() {
    const storedToken: Token = JSON.parse(localStorage.getItem(this.tokenKey));
    if (!storedToken) {
      console.log('No token found.');
      return null;
    }
    return storedToken;
  }

  public unAuthenticate() {
    localStorage.removeItem(this.tokenKey);
  }
}
