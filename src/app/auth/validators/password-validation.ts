
import { AbstractControl, ValidationErrors } from '@angular/forms';

export default (control: AbstractControl): ValidationErrors | null => {
  const value = control.value;
  const hasNumber = /[0-9]/.test(value);
  const hasCapitalLetter = /[A-Z]/.test(value);
  const hasLowercaseLetter = /[a-z]/.test(value);
  const isLengthValid = value ? value.length > 7 : false;
  const passwordValid = hasNumber && hasCapitalLetter && hasLowercaseLetter && isLengthValid;
  if (!passwordValid) return { invalidPassword: 'Your password is not strong enough' };
  return null;
};
