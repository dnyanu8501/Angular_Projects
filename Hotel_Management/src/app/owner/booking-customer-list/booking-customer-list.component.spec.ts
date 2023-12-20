import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingCustomerListComponent } from './booking-customer-list.component';

describe('BookingCustomerListComponent', () => {
  let component: BookingCustomerListComponent;
  let fixture: ComponentFixture<BookingCustomerListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookingCustomerListComponent]
    });
    fixture = TestBed.createComponent(BookingCustomerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
