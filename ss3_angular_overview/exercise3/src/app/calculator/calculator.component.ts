import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  value1: number;
  value2: number;
  total: number;
  error = '';
  constructor() {
  }

  ngOnInit(): void {
  }

  change(s: string) {
    switch (s) {
      case '+':
        this.total = this.value1 + this.value2;
        return this.error = '';
      case '-' :
        this.total = this.value1 - this.value2;
        return this.error = '';
      case '*' :
        this.total = this.value1 * this.value2;
        return this.error = '';
      case '/' :
        if (this.value2 === 0) {
          return this.error = 'Dont less than 0';
        } else {
          this.total = this.value1 / this.value2;
          return this.error = '';
        }
    }
  }
}
