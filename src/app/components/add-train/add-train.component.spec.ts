import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTrainComponent } from './add-train.component';

describe('AddTrainComponent', () => {
  let component: AddTrainComponent;
  let fixture: ComponentFixture<AddTrainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTrainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
