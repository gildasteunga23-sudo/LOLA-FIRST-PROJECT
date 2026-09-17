import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D } from './d';

describe('D', () => {
  let component: D;
  let fixture: ComponentFixture<D>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [D],
    }).compileComponents();

    fixture = TestBed.createComponent(D);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
