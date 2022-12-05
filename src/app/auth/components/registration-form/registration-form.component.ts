import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@core/services/auth.service';
import { CriptoService } from '@auth/services/cripto.service';
import passwordValidation from '@auth/validators/password-validation';
@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss'],
})
export class RegistrationFormComponent  {
  private passwordValidat = passwordValidation;

  constructor(public authService: AuthService,
    private router: Router,
    private criptoService: CriptoService) {}

  public registrFormGroup: FormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, passwordValidation]),
  });

  public isControlInvalid(controlName: string): boolean {
    const control = this.registrFormGroup.controls[controlName];
    return control.invalid && control.touched;
  }

  public submit() {
    const controlsForm = this.registrFormGroup.controls;
    if (this.registrFormGroup.invalid) {
      Object.keys(controlsForm).forEach(controlName => controlsForm[controlName].markAsTouched());
      return;
    }
    const criptoUserInfo: string = this.criptoService.getCriptoObject(this.registrFormGroup.value);
    localStorage.setItem('dataUser', JSON.stringify(criptoUserInfo));
    this.authService.setIsLogin(true);
    this.router.navigateByUrl('home');
  }
}
