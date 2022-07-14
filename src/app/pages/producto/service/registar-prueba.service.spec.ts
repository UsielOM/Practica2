import { TestBed } from '@angular/core/testing';

import { RegistarPruebaService } from './registar-prueba.service';

describe('RegistarPruebaService', () => {
  let service: RegistarPruebaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistarPruebaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
