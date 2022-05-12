import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookAc2Component } from './book-ac2.component';

describe('BookAc2Component', () => {
  let component: BookAc2Component;
  let fixture: ComponentFixture<BookAc2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookAc2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookAc2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
