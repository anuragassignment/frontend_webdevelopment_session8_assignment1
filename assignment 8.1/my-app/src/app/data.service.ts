import { Injectable, OnInit } from '@angular/core';

// service which provides data and method to add data to array and get array data in component using service
@Injectable()
export class DataService {
  data: { name: string, email: string }[] = [];
  constructor() { }
  // makes the component using service able to get the data
  getData() {
    return this.data;
  }
  // adds user data to array in service
  addData(obj: { name: string, email: string }) {
    this.data.unshift(obj);
  }
}