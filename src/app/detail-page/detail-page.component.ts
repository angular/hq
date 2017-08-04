import { Component } from '@angular/core';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent {
  data = {
    issues: [
      { title: 'issue 1', type: 'issue', statusDetails: [
        {type: 'travis', status: 'passing'},
      ] },
      { title: 'issue 2', type: 'issue', statusDetails: [
        {type: 'travis', status: 'passing'},
      ] },
      { title: 'issue 3', type: 'issue', statusDetails: [
        {type: 'travis', status: 'pending'},
      ] },
      { title: 'issue 4', type: 'issue', statusDetails: [
        {type: 'travis', status: 'failing'},
        {type: 'circle-ci', status: 'failing'},
      ] },
    ],
    prs: [
      { title: 'pr 1', type: 'pr', statusDetails: [
        {type: 'travis', status: 'passing'},
      ] },
      { title: 'pr 2', type: 'pr', statusDetails: [
        {type: 'travis', status: 'passing'},
      ] },
      { title: 'pr 3', type: 'pr', statusDetails: [
        {type: 'travis', status: 'passing'},
      ] },
      { title: 'pr 4', type: 'pr', statusDetails: [
        {type: 'travis', status: 'passing'},
      ] },
    ],
    assigned: [
      { title: 'pr X', type: 'pr', statusDetails: [
        {type: 'travis', status: 'passing'},
      ] },
      { title: 'pr Y', type: 'pr', statusDetails: [
        {type: 'travis', status: 'passing'},
      ] },
      { title: 'issue ABC', type: 'issue', statusDetails: [
        {type: 'travis', status: 'passing'},
      ] },
      { title: 'issue DEF', type: 'issue', statusDetails: [
        {type: 'travis', status: 'passing'},
      ] },
    ]
  };
}
