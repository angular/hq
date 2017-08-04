import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent {
  @Input('item')
  public data: any = {};

  constructor() { }

  get title() {
    return this.data['title'] || '';
  }

  get statusDetails() {
    return this.data['statusDetails'] || [];
  }
}
