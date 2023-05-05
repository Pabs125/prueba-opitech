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
  @Input() filterAge: string = '';
  listUsers: UsersList[] = [];
  dataReserve: UsersList[] = [];
  listColumns: string[] = [];
  isFiltering: boolean = false;


  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.setAllData(); 
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

  applyFilter(){
    if (this.filterGender === "All gender" && this.filterAge === "All age"){
      this.listUsers = [...this.dataReserve];
      this.isFiltering = false;
      return;
    }
    this.isFiltering = true;
    if (this.filterGender !== "All gender"){
      this.genderFilter();
    } else{
      this.listUsers = [...this.dataReserve];
    }
    if (this.filterAge !== "All age"){
      this.ageFilter();
    } else{
      this.listUsers = [...this.listUsers];
    }

  }

  genderFilter(){
    this.listUsers = this.dataReserve.filter((item) => item.gender === this.filterGender);
  }

  
  ageFilter(){
    this.listUsers = this.listUsers.filter((item) => {
      const min = parseInt(this.filterAge.split("-")[0], 10)
      const max = parseInt(this.filterAge.split("-")[1], 10)
      if (min > 100 ){
        return parseInt(item.age) > min;
      }
      return parseInt(item.age) >= min && parseInt(item.age) <= max;
    });
  }



}
