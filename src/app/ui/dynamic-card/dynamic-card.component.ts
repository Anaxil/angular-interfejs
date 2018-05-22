import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dynamic-card',
  template: `
  <div class="card" *ngIf="isOpen">
    <div class="card-body">
      {{text}}
    </div>
  </div>
  `,
  styles: []
})
export class DynamicCardComponent implements OnInit {

  @Input()
  text = 'test';

  @Input('open')
  isOpen=false;

  constructor() { }

  ngOnInit() {
  }

}
