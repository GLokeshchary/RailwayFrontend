import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookSsComponent } from './book-ss.component';

describe('BookSsComponent', () => {
  let component: BookSsComponent;
  let fixture: ComponentFixture<BookSsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookSsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookSsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
