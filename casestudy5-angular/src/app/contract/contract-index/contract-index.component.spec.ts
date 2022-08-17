import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractIndexComponent } from './contract-index.component';

describe('ContractIndexComponent', () => {
  let component: ContractIndexComponent;
  let fixture: ComponentFixture<ContractIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
