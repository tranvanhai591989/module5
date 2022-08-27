import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalFileCreateComponent } from './medicalFileCreate.component';

describe('TaoBenhAnComponent', () => {
  let component: MedicalFileCreateComponent;
  let fixture: ComponentFixture<MedicalFileCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalFileCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalFileCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
