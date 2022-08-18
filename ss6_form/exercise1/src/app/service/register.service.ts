import {Injectable} from '@angular/core';
import {Register} from '../model/Register';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor() {
  }

  registers: Register[] = [];

  getAll() {
    return this.registers;
  }

  saveRegister(register: Register) {
    this.registers.push(register);

  }
}
