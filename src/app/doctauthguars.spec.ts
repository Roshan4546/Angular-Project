import { TestBed } from '@angular/core/testing';

import { Doctauthguars } from './doctauthguars';

describe('Doctauthguars', () => {
  let service: Doctauthguars;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Doctauthguars);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
