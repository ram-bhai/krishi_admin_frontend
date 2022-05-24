import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingStorageComponent } from './booking-storage.component';

describe('BookingStorageComponent', () => {
  let component: BookingStorageComponent;
  let fixture: ComponentFixture<BookingStorageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingStorageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
