import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookSLComponent } from './book-sl.component';

describe('BookSLComponent', () => {
  let component: BookSLComponent;
  let fixture: ComponentFixture<BookSLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookSLComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookSLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
