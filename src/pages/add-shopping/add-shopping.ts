import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { ShoppingItem } from '../../models/shopping-item/shopping-item.interface';

@Component({
  selector: 'page-add-shopping',
  templateUrl: 'add-shopping.html',
})
export class AddShoppingPage {

  //Creating a new Object
  shoppingItem = {} as ShoppingItem

  shoppingItemRef$: FirebaseListObservable<ShoppingItem[]>

  constructor(public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase) {
   this.shoppingItemRef$ = this.database.list('shopping-list');

  /*
    shopping-list:
      0:
        itemName:
        itemNumer:

      1:



  */
  
  
  
  }

 addShoppingItem(shoppingItem: ShoppingItem){
   
  this.shoppingItemRef$.push({
    itemName: this.shoppingItem.itemName,
    itemNumber: Number(this.shoppingItem.itemNumber)
  });
 }

}
