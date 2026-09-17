import { ComponentFixture, TestBed } from '@angular/core/testing';

import { L } from './l';

describe('L', () => {
  let component: L;
  let fixture: ComponentFixture<L>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [L],
    }).compileComponents();

    fixture = TestBed.createComponent(L);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
