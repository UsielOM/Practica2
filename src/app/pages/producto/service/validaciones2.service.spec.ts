import { TestBed } from '@angular/core/testing';

import { Validaciones2Service } from './validaciones2.service';

describe('Validaciones2Service', () => {
  let service: Validaciones2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Validaciones2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
