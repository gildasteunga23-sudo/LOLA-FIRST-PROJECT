import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Conflict } from './conflict';

describe('Conflict', () => {
  let component: Conflict;
  let fixture: ComponentFixture<Conflict>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Conflict],
    }).compileComponents();

    fixture = TestBed.createComponent(Conflict);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
