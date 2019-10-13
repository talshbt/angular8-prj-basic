import { Component, OnInit } from '@angular/core';
import { Ingerdient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingerdients:Ingerdient[] = [];

  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit() {
    this.ingerdients = this.shoppingListService.getIngredients();
    this.shoppingListService.newIngredientEvent.subscribe(
      (ingerdients:Ingerdient[])=>{
        this.ingerdients = ingerdients;
      }
    );
  }


}
