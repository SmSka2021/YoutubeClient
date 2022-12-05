import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { SignInFormComponent } from './components/sign-in-form/sign-in-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationPageComponent } from './pages/registration-page/registration-page.component';
import {  Routes, RouterModule } from '@angular/router';
import { CriptoService } from './services/cripto.service';
import { CreateCardFormComponent } from './components/create-card-form/create-card-form.component';
import { AdminPagesComponent } from './pages/admin-pages/admin-pages.component';

const routes: Routes = [
  { path: '', component:  RegistrationPageComponent },
];
@NgModule({
  declarations: [
    RegistrationFormComponent,
    SignInFormComponent,
    RegistrationPageComponent,
    CreateCardFormComponent,
    AdminPagesComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    AdminPagesComponent,
  ],
  providers: [CriptoService],
})
export class AuthModule { }
