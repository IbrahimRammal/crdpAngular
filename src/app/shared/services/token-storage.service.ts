import { Injectable } from '@angular/core';
import { Subject,Observable } from 'rxjs';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
const PERMISSION_KEY = 'userPermissions';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  constructor() { }

  private storageSub = new Subject<String>();

  watchStorage(): Observable<any> {
    return this.storageSub.asObservable();
  }
  signOut(): void {
    window.sessionStorage.clear();
    window.localStorage.clear();
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string | null {

    // return window.sessionStorage.getItem(TOKEN_KEY) ;
    return window.localStorage.getItem(TOKEN_KEY) ;
  }

  public saveUser(user: any): void {
    window.localStorage.removeItem(USER_KEY);
    window.localStorage.setItem(USER_KEY, JSON.stringify(user));
    this.storageSub.next(user.profilePic);
  }

  public getUser(): any {
    const user = window.localStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }
    return {};
  }
  public saveUserPerms(permList: any): void {
    window.localStorage.removeItem(PERMISSION_KEY);
    window.localStorage.setItem(PERMISSION_KEY, JSON.stringify(permList));
  }

  public getUserPerms(): any {
    const perms= window.localStorage.getItem(PERMISSION_KEY);
    if (perms) {
      return JSON.parse(perms);
    }
    return [];
  }
}
