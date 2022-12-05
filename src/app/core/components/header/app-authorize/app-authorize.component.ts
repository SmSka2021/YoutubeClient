import { Component } from '@angular/core';
import { AuthService } from '@core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authorize',
  templateUrl: './app-authorize.component.html',
  styleUrls: ['./app-authorize.component.scss'],
})
export class AppAuthorizeComponent {
  constructor( public authService: AuthService, private router: Router) {}

  public loginOut() {
    this.authService.setIsLogin(false);
    this.router.navigateByUrl('authorize');
    localStorage.removeItem('dataUser');
  }

}
