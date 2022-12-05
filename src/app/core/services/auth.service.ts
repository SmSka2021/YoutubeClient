import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AuthService {
  private registration$ = new BehaviorSubject<boolean>(false);

  private isLogin$ = new BehaviorSubject<boolean>(false);

  private isLogin = new BehaviorSubject<boolean>(false);

  public getRegistration(): boolean {
    return this.registration$.getValue();
  }

  public setRegistration(): void {
    this.registration$.next(!this.getRegistration());
  }

  public getIsLogin(): boolean {
    if (localStorage.getItem('dataUser')) return true;
    return this.isLogin$.getValue();
  }

  public setIsLogin(value: boolean): void {
    this.isLogin$.next(value);
  }
}
