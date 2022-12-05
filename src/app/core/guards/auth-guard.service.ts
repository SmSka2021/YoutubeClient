import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '@core/services/auth.service';

@Injectable()
export class AuthGuard implements CanLoad {
  constructor(private authService: AuthService, private router: Router) {}

  public canLoad(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.getIsLogin()) return true;
    if (localStorage.getItem('dataUser')) return true;
    this.router.navigate(['authorize']);
    return false;
  }

}
