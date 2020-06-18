import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodbankPhoneComponent } from './bloodbank-phone.component';

describe('BloodbankPhoneComponent', () => {
  let component: BloodbankPhoneComponent;
  let fixture: ComponentFixture<BloodbankPhoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BloodbankPhoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BloodbankPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
