import { Injectable } from "@angular/core";
import { users } from "../users-data";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {
  users = users;
  constructor(private http: HttpClient) {}

  getUsersData() {
    return this.users;
  }
}
console.log(users)