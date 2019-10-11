import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Ingerdient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @Output() ingerdientEvent = new EventEmitter<Ingerdient>();

  constructor() { }

  ngOnInit() {
  }

  onAddInput(nameInput: HTMLInputElement, amountInput:HTMLInputElement){
  
    this.ingerdientEvent.emit(new Ingerdient(nameInput.value, parseInt(amountInput.value)))
  }

}
