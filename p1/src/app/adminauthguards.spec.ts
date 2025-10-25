import { TestBed } from '@angular/core/testing';

import { Adminauthguards } from './adminauthguards';

describe('Adminauthguards', () => {
  let service: Adminauthguards;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Adminauthguards);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
