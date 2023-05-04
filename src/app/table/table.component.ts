import { Component } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass']
})
export class TableComponent {
  
    constructor(
      private dataService: DataService
    ) { }
  
    ngOnInit(): void {
      this.dataService.getData();
    }
}
