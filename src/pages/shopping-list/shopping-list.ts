import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { FirebaseListObservable } from 'angularfire2/database';

import { AddShoppingPage } from '../add-shopping/add-shopping';
import { ShoppingItem } from '../../models/shopping-item/shopping-item.interface';

@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html',
})
export class ShoppingListPage {

  shoppingListRef$: FirebaseListObservable<ShoppingItem[]>

  constructor(public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase) {
    /*
    Pointing shoppingListRef$ at Firebase -> 'shopping-list' node
     that means not only can we push things from this reference to 
    the database, but also access to node
    */
    this.shoppingListRef$ = this.database.list('shopping-list');

  }

   navigateToAddShoppingPage() {
     //navigate the user to the add shopping page
    this.navCtrl.push(AddShoppingPage);
  }

}
