import { Component, OnInit, Output,EventEmitter, ViewChild, OnDestroy } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingerdient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f', { static: false }) signupForm: NgForm;
  subscribe:Subscription;
  editMode = false;
  editedItemIndex;
  editedItem: Ingerdient  ;

  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit() {
    this.subscribe = this.shoppingListService.startedEditing.subscribe(
      (id:number)=>{
        this.editMode = true;
        this.editedItemIndex = id;
        this.editedItem = this.shoppingListService.getIngredient(id);
        this.signupForm.setValue({
          name: this.editedItem.name,
          amount:this.editedItem.amount
        })
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
