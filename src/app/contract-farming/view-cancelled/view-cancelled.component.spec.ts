import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCancelledComponent } from './view-cancelled.component';

describe('ViewCancelledComponent', () => {
  let component: ViewCancelledComponent;
  let fixture: ComponentFixture<ViewCancelledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCancelledComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCancelledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
