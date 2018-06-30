import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-test-anim',
  templateUrl: './test-anim.component.html',
  styleUrls: ['./test-anim.component.scss']
  ,
  animations: [
    trigger('heroState', [
      state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('active',   style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.1)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
      //transition('inactive <=> active', animate('100ms ease-out'))
      // transition('inactive => active, active => inactive', animate('100ms ease-out'))
    ])
  ]
})
export class TestAnimComponent implements OnInit {
  public state = 'inactive';
  constructor() { }

  ngOnInit() {
  }

  //heroState

  toggleState() {
    this.state = this.state === 'active' ? 'inactive' : 'active';
  }

  /*
  transition('inactive => active', [
  style({
    backgroundColor: '#cfd8dc',
    transform: 'scale(1.3)'
  }),
  animate('80ms ease-in', style({
    backgroundColor: '#eee',
    transform: 'scale(1)'
  }))
])
  */

}
