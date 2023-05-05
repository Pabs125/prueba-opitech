import { Component, Input, OnChanges } from '@angular/core';
import { DataService } from '../service/data.service';
import { UsersList } from '../interface/data';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass']
})
export class TableComponent {
  @Input() filterGender: string = '';
  listUsers: UsersList[] = [];
  dataReserve: UsersList[] = [];
  listColumns: string[] = [];
  
  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.setAllData();
    this.setFilterGender();
  }

  ngOnChanges(changes: any) {
    if (changes.filterGender) {
      this.setFilterGender();
    }
  }

  async setAllData(): Promise<void> {
    try {
      this.listUsers = await this.dataService.getData();
      if(this.listUsers) {
        this.listUsers.map((item) => {
          Object.keys(item).map((key) => {
            if (this.listColumns.includes(key)) return
  
            this.listColumns.push(key)
          })
        })
        this.dataReserve = [...this.listUsers];
      }
    } catch (error) {
      console.log(error)
    }
  }

  setFilterGender() {
    if (this.filterGender == "All gender") {
      this.listUsers = [...this.dataReserve];
    } else {
      this.listUsers = this.dataReserve.filter((item) => item.gender == this.filterGender)
    }
  }
}
