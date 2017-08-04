import { ViewChildren, HostBinding, Component, Output, EventEmitter } from '@angular/core';
import { query, stagger, animateChild, group, animate, transition, trigger, style } from '@angular/animations';
import {ProjectPipe} from '../project.pipe';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.scss'],
  animations: [
    trigger('container', [
      transition(':enter', []),
      transition('* => open', [
        query('.expanded-area', [
          query('.list-item', style({ transform: 'translateY(-50%)', opacity: 0 })),
          style({ overflow: 'hidden', height: '0px' }),
          group([
            animate('0.5s cubic-bezier(0.35, 0, 0.25, 1)', style('*')),
            query('.list-item', [
              stagger(50, animate('0.3s cubic-bezier(0.35, 0, 0.25, 1)', style('*')))
            ])
          ])
        ])
      ]),
      transition('* => closed', [
        query('.expanded-area', [
          style({ overflow: 'hidden', height: '!' }),
          group([
            query('.list-item', [
              stagger(20, [
                animate('0.2s', style({ transform: 'translateY(-50%)', opacity: 0 }))
              ])
            ]),
            animate('0.5s cubic-bezier(0.35, 0, 0.25, 1)', style({ height: '0px' }))
          ])
        ])
      ]),
    ])
  ]
})
export class HeaderBarComponent {
  @HostBinding('@container')
  get containerStatus() {
    return this.expanded ? 'open' : 'closed';
  }

  @Output('change')
  changeEmitter = new EventEmitter();

  expanded = false;
  filterCriteria = '';

  options = [
    { type: 'project', title: 'Angular' },
    { type: 'project', title: 'Angular Next Release' },
    { type: 'project', title: 'Material' },
    { type: 'project', title: 'Angular Animations' },
    { type: 'person', title: 'Misko Hevery' },
    { type: 'person', title: 'Igor Minar' },
  ];

  filter = new ProjectPipe();

  activeArea: string;

  constructor() {
    this.activeArea = this.options[0].title;
  }

  select(option: any) {
    this.activeArea = option.title;
    this.expanded = false;
    this.filterCriteria = '';
    this.informChange();
  }

  toggleExpand() {
    this.expanded = !this.expanded;
  }

  informChange() {
    this.changeEmitter.next(this.activeArea);
  }

  searchKeyDown(event: any) {
    switch (event.keyCode) {
      case 13: // enter key
        const result = this.filter.transform(this.options, this.filterCriteria)[0];
        if (result) {
          this.select(result);
        }
        break;
      case 27: // esc key
        if (this.filterCriteria) {
          this.filterCriteria = '';
        } else {
          this.expanded = false;
        }
        break;
    }
  }
}
