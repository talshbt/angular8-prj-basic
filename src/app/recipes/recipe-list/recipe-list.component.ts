import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Ingerdient } from 'src/app/shared/ingredient.model';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes:Recipe []=[];
  newRecipeClicked = false;
  myForm:FormGroup;


 
  constructor(private recipeService:RecipeService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipe();

  
    
  }

  

  onNewRecipe(){
    console.log("clicked")
    this.router.navigate(['new'], {relativeTo:this.route});
    this.recipeService.addNewRecipe( new Recipe('Sexy Buns',
    'This is simply a test', 
    'https://images.pexels.com/photos/166655/pexels-photo-166655.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    [
      new Ingerdient('Buns', 2),
      new Ingerdient('Meat', 4)

    ]));

    this.recipes = this.recipeService.getRecipe();
    this.newRecipeClicked = true;

  }







}
