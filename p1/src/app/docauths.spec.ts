import { TestBed } from '@angular/core/testing';

import { Docauths } from './docauths';

describe('Docauths', () => {
  let service: Docauths;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Docauths);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
