import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
	cards = [{id: 1}, {id: 2}]
	constructor(private router: Router) {

  }

  temp_goToDetailPage() {
    this.router.navigateByUrl('/detail');
  }
}
