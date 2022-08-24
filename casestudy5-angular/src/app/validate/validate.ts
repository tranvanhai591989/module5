import {AbstractControl} from '@angular/forms';
import {formatDate} from '@angular/common';

export function checkPositiveNumber(control: AbstractControl) {
  const numberCheck = control.value;
  if (numberCheck < 0) {
    return {positiveNumber: true};
  }
  return null;
}

export function checkAge18(abstractControl: AbstractControl): any {
  if (abstractControl.value === '') {
    return null;
  }
  const today = new Date();
  const birthDate = new Date(abstractControl.value);
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return (age >= 18) ? null : {age18: true};
}

export function checkInputBirthday(birthday: AbstractControl) {
  const value = birthday.value;
  const curDate = formatDate(new Date(), 'yyyy-MM-dd', 'en-US');
  console.log('curDate:');
  console.log(curDate);
  if (value >= curDate) {
    return {checkBirthday: true};
  }
  return null;
}

export function checkInputDateFuture(date: AbstractControl) {
  const startDate = date.value.startDate;
  const endDate = date.value.endDate;

  if (startDate >= endDate) {
    return {checkInputDateFuture: true};
  }
  return null;
}
