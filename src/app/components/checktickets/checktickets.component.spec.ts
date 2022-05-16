import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckticketsComponent } from './checktickets.component';

describe('CheckticketsComponent', () => {
  let component: CheckticketsComponent;
  let fixture: ComponentFixture<CheckticketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckticketsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckticketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
