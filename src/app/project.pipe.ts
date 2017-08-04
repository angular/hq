import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'project'
})
export class ProjectPipe implements PipeTransform {
  transform(values: any[], filterCriteria: string|null): any[] {
    const criteria = (filterCriteria || '').trim().toLowerCase();
    if (criteria) {
      values = values.filter(v => v.title.toLowerCase().indexOf(criteria) >= 0);
    }
    return values;
  }
}
