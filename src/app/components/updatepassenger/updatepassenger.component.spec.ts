import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatepassengerComponent } from './updatepassenger.component';

describe('UpdatepassengerComponent', () => {
  let component: UpdatepassengerComponent;
  let fixture: ComponentFixture<UpdatepassengerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatepassengerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatepassengerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
