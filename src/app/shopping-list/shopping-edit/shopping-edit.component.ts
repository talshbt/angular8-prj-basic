import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Ingerdient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit() {
  }

  onAddInput(nameInput: HTMLInputElement, amountInput:HTMLInputElement){
    this.shoppingListService.addIngredient(new Ingerdient(nameInput.value, parseInt(amountInput.value)));
    // this.shoppingListService.newIngredientEvent.emit(new Ingerdient(nameInput.value, parseInt(amountInput.value)));
  }

}
