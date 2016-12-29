import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Data provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Data {

  items: any;
  apiUrl: string;

  constructor(public http: Http) {
    console.log('Hello Data Provider');
    this.apiUrl = 'https://synonymordboken.no/api/search.php?q=';
  }


  getItems(searchTerm) {
    // if (this.items) {
    //   // already loaded data
    //   return Promise.resolve(this.items);
    // }

    return new Promise(resolve => {
      this.http.get(this.apiUrl + searchTerm)
        .map(res => res.json())
        .subscribe(items => {
          this.items = items;
          resolve(this.items);
          console.log(this.items);
        });
    });
  }

}