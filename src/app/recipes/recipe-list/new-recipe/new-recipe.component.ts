import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.css']
})
export class NewRecipeComponent implements OnInit {
  signupForm:FormGroup;

  constructor() { }

  ngOnInit() {
    //new
    this.signupForm = new FormGroup({
      'recipeName': new FormControl(null),
      'recipeDescription': new FormControl(null),
      'recipeImg': new FormControl(null),
      'userData': new FormGroup({
        'name': new FormControl(null),
        'number': new FormControl(null)

      })
    })
  }



}
