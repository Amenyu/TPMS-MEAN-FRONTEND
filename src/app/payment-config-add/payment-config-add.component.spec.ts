import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentConfigAddComponent } from './payment-config-add.component';

describe('PaymentConfigAddComponent', () => {
  let component: PaymentConfigAddComponent;
  let fixture: ComponentFixture<PaymentConfigAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentConfigAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentConfigAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
