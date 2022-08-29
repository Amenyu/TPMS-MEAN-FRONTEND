import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentConfigEditComponent } from './payment-config-edit.component';

describe('PaymentConfigEditComponent', () => {
  let component: PaymentConfigEditComponent;
  let fixture: ComponentFixture<PaymentConfigEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentConfigEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentConfigEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
