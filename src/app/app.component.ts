import { Component, ViewChild } from '@angular/core';
import { TableComponent } from './table/table.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  genderFilter: string = "All gender";
  ageFilter: string = "All age";
  @ViewChild(TableComponent) child!: TableComponent;

  constructor(
  ) { }

  sendFilter() {
    this.child.applyFilter()
  }
}
