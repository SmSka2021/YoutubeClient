import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '@core/services/auth.service';
import { Router } from '@angular/router';
import { CriptoService } from '@auth/services/cripto.service';
import passwordValidation from '@auth/validators/password-validation';
@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss'],
})
export class SignInFormComponent implements OnInit {
  public regFormGroup!: FormGroup;

  constructor(public authService: AuthService,
    private router: Router,
    private criptoService: CriptoService) {}

  ngOnInit() {
    this.regFormGroup = new FormGroup({
      login: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, passwordValidation]),
    });
  }

  public submit() {
    const controlsForm = this.regFormGroup.controls;
    if (this.regFormGroup.invalid) {
      Object.keys(controlsForm).forEach(controlName => controlsForm[controlName].markAsTouched());
      return;
    }
    const criptoUserInfo: string = this.criptoService.getCriptoObject(this.regFormGroup.value);
    localStorage.setItem('dataUser', JSON.stringify(criptoUserInfo));
    this.authService.setIsLogin(true);
    this.router.navigateByUrl('home');
  }

}
