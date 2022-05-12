import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookAc3Component } from './book-ac3.component';

describe('BookAc3Component', () => {
  let component: BookAc3Component;
  let fixture: ComponentFixture<BookAc3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookAc3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookAc3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
