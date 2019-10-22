import { Component, OnInit, Output,EventEmitter, ViewChild, OnDestroy } from '@angular/core';
import { Ingerdient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  
  subscribe:Subscription;
  editMode = false;
  editedItemIndex;
  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit() {
    this.subscribe = this.shoppingListService.startedEditing.subscribe(
      (id)=>{
        console.log("id = " + id);
        this.editMode = true;
        this.editedItemIndex = id;
      }
    );
  }

  onAddInput(form: NgForm){
    const value = form.value;
    const newIngredient = new Ingerdient(value.name,value.amount);
    this.shoppingListService.addIngredient(newIngredient);
  }

  ngOnDestroy(){
    this.subscribe.unsubscribe();
  }

}
