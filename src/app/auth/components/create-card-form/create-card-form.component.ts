import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import urlValidation from '@auth/validators/url-validator';
import dateValidation from '@auth/validators/date-validator';
import { Store } from '@ngrx/store';
import { addCardAdmin } from './../../../store/actions/create-card.action';
import { AdminCard } from './../../../shared/models/interfaces';
import { Router } from '@angular/router';
import * as uuid from 'uuid';
@Component({
  selector: 'app-create-card-form',
  templateUrl: './create-card-form.component.html',
  styleUrls: ['./create-card-form.component.scss'],
})
export class CreateCardFormComponent implements OnInit {
  private dateValidator = dateValidation;

  public isShowCreateform = true;

  public isFormValid: boolean = false;

  private urlRegEx: string = urlValidation;

  public createCardForm!: FormGroup;

  constructor(private store: Store, private router: Router) {}

  ngOnInit() {
    this.createCardForm = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
      discription: new FormControl('', [Validators.required, Validators.maxLength(255)]),
      img: new FormControl('', [Validators.required, Validators.pattern(this.urlRegEx)]),
      linkVideo: new FormControl('', [Validators.required, Validators.pattern(this.urlRegEx)]),
      datePublic: new FormControl('', [Validators.required, this.dateValidator]),
    });
  }

  public submit() {
    const controlsForm = this.createCardForm.controls;
    if (this.createCardForm.invalid) {
      Object.keys(controlsForm).forEach(controlName => controlsForm[controlName].markAsTouched());
      return;
    }
    const card: AdminCard = this.createCardForm.value;
    card.id = uuid.v4();
    this.store.dispatch(addCardAdmin({ card }));
    this.isFormValid = true;
    this.isShowCreateform = false;
  }

  public createNewCard() {
    this.createCardForm.reset();
    this.isShowCreateform = true;
  }

  public closeCreateNewCard() {
    this.router.navigateByUrl('home');
  }

}
