import { TestBed } from '@angular/core/testing';

import { Adminauths } from './adminauths';

describe('Adminauths', () => {
  let service: Adminauths;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Adminauths);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
