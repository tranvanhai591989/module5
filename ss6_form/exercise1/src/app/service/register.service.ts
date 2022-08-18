import {Injectable} from '@angular/core';
import {Register} from '../model/Register';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor() {
  }

  registers: Register[] = [];

  saveRegister(register: Register) {
    this.registers.push(register);

  }
}
