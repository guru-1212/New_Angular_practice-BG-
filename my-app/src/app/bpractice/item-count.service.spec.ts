import { TestBed } from '@angular/core/testing';

import { ItemCountService } from './item-count.service';

describe('ItemCountService', () => {
  let service: ItemCountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemCountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
