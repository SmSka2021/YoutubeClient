import { TestBed } from '@angular/core/testing';

import { DetailInfoCardService } from './detail-info-card.service';

describe('DetailInfoCardService', () => {
  let service: DetailInfoCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailInfoCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
