import { Component, OnInit, Output,EventEmitter, ViewChild } from '@angular/core';
import { Ingerdient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('f', { static: false }) signupForm: NgForm;

  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit() {
  }

  onAddInput(form: NgForm){
    const value = form.value;
    const newIngredient = new Ingerdient(value.name,value.amount);
    this.shoppingListService.addIngredient(newIngredient);
  }

}
