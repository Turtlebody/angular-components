import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TurtlebodyAngularComponent } from './turtlebody-angular.component';

describe('TurtlebodyAngularComponent', () => {
  let component: TurtlebodyAngularComponent;
  let fixture: ComponentFixture<TurtlebodyAngularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TurtlebodyAngularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TurtlebodyAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
