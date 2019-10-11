import { Component, OnInit } from '@angular/core';
import { Ingerdient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingerdients:Ingerdient[] = [
    new Ingerdient("Appels",5),
    new Ingerdient("Tomatoes",7),

  ];

  constructor() { }

  ngOnInit() {
  }

  getNewIngerdient(newIngerdient: Ingerdient){
    this.ingerdients.push(newIngerdient);
  }

}
