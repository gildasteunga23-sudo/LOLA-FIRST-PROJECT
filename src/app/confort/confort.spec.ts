import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Confort } from './confort';

describe('Confort', () => {
  let component: Confort;
  let fixture: ComponentFixture<Confort>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Confort],
    }).compileComponents();

    fixture = TestBed.createComponent(Confort);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
