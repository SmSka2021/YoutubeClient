
import { AbstractControl, ValidationErrors } from '@angular/forms';

export default (control: AbstractControl): ValidationErrors | null => {
  const dateUser: number = Date.parse(control.value);
  const today: number = new Date().getTime();
  if (dateUser > today) return { invaliddate: 'The date is invalid' };
  return null;
};


