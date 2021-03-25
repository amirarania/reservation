import { TestBed } from '@angular/core/testing';

import { passagersService } from './passagers.service';

describe('passagersService', () => {
  let service: passagersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(passagersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
