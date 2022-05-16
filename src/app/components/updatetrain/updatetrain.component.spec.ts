import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatetrainComponent } from './updatetrain.component';

describe('UpdatetrainComponent', () => {
  let component: UpdatetrainComponent;
  let fixture: ComponentFixture<UpdatetrainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatetrainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatetrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
