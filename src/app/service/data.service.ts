import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }


  async getData(): Promise<void> {
    this.http.get('https://randomuser.me/api/?results=100')
      .subscribe((dat: any) => {
        console.log(dat.results)
      })
  }
}
