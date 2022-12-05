import { Component } from '@angular/core';
import { AuthService } from '@core/services/auth.service';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss'],
})
export class RegistrationPageComponent  {
  constructor(public authService: AuthService) {}

}
