import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardUserComponentComponent } from './board-user-component.component';

describe('BoardUserComponentComponent', () => {
  let component: BoardUserComponentComponent;
  let fixture: ComponentFixture<BoardUserComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardUserComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardUserComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
