import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentConfigListComponent } from './payment-config-list.component';

describe('PaymentConfigListComponent', () => {
  let component: PaymentConfigListComponent;
  let fixture: ComponentFixture<PaymentConfigListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentConfigListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentConfigListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
