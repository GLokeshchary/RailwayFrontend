import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookAc1Component } from './book-ac1.component';

describe('BookAc1Component', () => {
  let component: BookAc1Component;
  let fixture: ComponentFixture<BookAc1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookAc1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookAc1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
