import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContadorEmpleadosComponent } from './contador-empleados.component';

describe('ContadorEmpleadosComponent', () => {
  let component: ContadorEmpleadosComponent;
  let fixture: ComponentFixture<ContadorEmpleadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContadorEmpleadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContadorEmpleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
