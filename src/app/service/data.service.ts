import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataResult, UsersList } from '../interface/data';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(
    private http: HttpClient
  ) { }


  getData(): Promise<UsersList[]>{
    return new Promise((resolve, reject) => {
      let listUsers: UsersList[] = []

      try {
        this.http.get('https://randomuser.me/api/?results=100')
        .subscribe((data: any) => {
          data.results.map((item: DataResult, index: string) => {
            const newUser = {
              id: index,
              name: `${item.name.first} ${item.name.last}`,
              email: item.email,
              cell: item.cell,
              gender: item.gender,
              age: item.dob!.age
            }

            listUsers.push(newUser);
          })
          resolve(listUsers);
        })
      } catch (error) {
        reject(error);
      }
    });
  }
}
