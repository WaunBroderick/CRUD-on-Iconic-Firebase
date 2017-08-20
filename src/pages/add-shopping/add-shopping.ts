import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ShoppingItem } from '../../models/shopping-item/shopping-item.interface';

@Component({
  selector: 'page-add-shopping',
  templateUrl: 'add-shopping.html',
})
export class AddShoppingPage {

  //Creating a new Object
  shoppingItem = {} as ShoppingItem

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

 addShoppingItem(shoppingItem: ShoppingItem){
   
  // Log Results to console
  console.log(shoppingItem);
 }

}
