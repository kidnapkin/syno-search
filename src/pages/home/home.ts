import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Data } from '../../providers/data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    searchTerm: string = '';
    items: any;
 
    constructor(public navCtrl: NavController, public dataService: Data) {
 
    }
 
    ionViewDidLoad() {
        this.setFilteredItems();
    }
 
    setFilteredItems() {
        this.items = this.dataService.getItems(this.searchTerm);
    }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    this.searchTerm = '';
    this.items = this.dataService.getItems(this.searchTerm);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }
}
