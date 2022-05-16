import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEquipmentsComponent } from './add-equipments.component';

describe('AddEquipmentsComponent', () => {
  let component: AddEquipmentsComponent;
  let fixture: ComponentFixture<AddEquipmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEquipmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEquipmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
