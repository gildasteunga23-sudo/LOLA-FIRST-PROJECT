import { ComponentFixture, TestBed } from '@angular/core/testing';

import { F } from './f';

describe('F', () => {
  let component: F;
  let fixture: ComponentFixture<F>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [F],
    }).compileComponents();

    fixture = TestBed.createComponent(F);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
