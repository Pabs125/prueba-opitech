import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  genderFilter: string = "All gender";

  constructor(
  ) { }

  /* sendfilter() {
    this.child.setFilter('que mas');
  } */
}
