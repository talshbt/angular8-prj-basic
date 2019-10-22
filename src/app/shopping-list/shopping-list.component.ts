import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingerdient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingerdients:Ingerdient[] = [];

    subscribe:Subscription;
  
  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit() {
    this.ingerdients = this.shoppingListService.getIngredients();
    this.subscribe = this.shoppingListService.newIngredientEvent.subscribe(
      (ingerdients:Ingerdient[])=>{
        this.ingerdients = ingerdients;
      }
    );
  }

  ngOnDestroy(){
    this.subscribe.unsubscribe();
  }
  onEditItem(id){
    this.shoppingListService.startedEditing.next(id);

  }
}
