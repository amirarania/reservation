import { TestBed } from '@angular/core/testing';

import { chauffeursService } from './chauffeurs.service';

describe('chauffeursService', () => {
  let service: chauffeursService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(chauffeursService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
