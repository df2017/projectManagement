import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base',
  template: `<app-header>
      <img class="logo" src="/assets/images/logo.png" alt="" />
  </app-header>
  <app-navbar></app-navbar>
  `,
  styleUrls: [

  ]
})
export class BaseComponent implements OnInit {

  pathLogo: string = '../../../assets/images/logo.png';
  constructor() { }

  ngOnInit(): void {
  }

}
