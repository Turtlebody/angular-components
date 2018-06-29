import { TestBed, inject } from '@angular/core/testing';

import { TurtlebodyAngularService } from './turtlebody-angular.service';

describe('TurtlebodyAngularService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TurtlebodyAngularService]
    });
  });

  it('should be created', inject([TurtlebodyAngularService], (service: TurtlebodyAngularService) => {
    expect(service).toBeTruthy();
  }));
});
