import { HostBinding, Component, Input } from '@angular/core';

const STATUS_PASSING = 'passing';
const STATUS_FAILING = 'failing';
const STATUS_PENDING = 'pending';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent {
  @Input('label')
  public label = '';

  @Input('status')
  public status: string = '';

  @HostBinding('class')
  get className() {
    let className = 'result';
    switch (this.status) {
      case STATUS_PASSING:
        return className + ' is-passing';
      case STATUS_FAILING:
        return className + ' is-failing';
      case STATUS_PENDING:
        return className + ' is-pending';
    }
    return className;
  }
}
