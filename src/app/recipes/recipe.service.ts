import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingerdient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {

  recipeChanged = new Subject<Recipe[]>();
   constructor(private shoppingListService:ShoppingListService) { }

   private recipes:Recipe[] = [
        new Recipe('Big Hamburger',
                  'This is simply a test', 
                  'https://upload.wikimedia.org/wikipedia/commons/3/3f/Flickr_-_cyclonebill_-_Burger.jpg',
                  [
                    new Ingerdient('Meat', 1),
                    new Ingerdient('French Fried', 3)

                  ]) ,
        new Recipe('Sexy Buns',
                  'This is simply a test', 
                  'https://images.pexels.com/photos/166655/pexels-photo-166655.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
                  [
                    new Ingerdient('Buns', 2),
                    new Ingerdient('Meat', 4)

                  ])
      ];


    getRecipe(){
        //only get a copy and not the refernce inself- more private now
        return this.recipes.slice();
    }

    getRec(index){
      return this.recipes.slice()[index];
    }

    addIngredientToShoppingList(ingredients:Ingerdient[]){
      this.shoppingListService.addIngrediens(ingredients);
    }
   
    addNewRecipe(recipe:Recipe){
      this.recipes.push(recipe);
      this.recipeChanged.next(this.recipes.slice());

    }

    updateRecipe(index, recipe:Recipe){
      this.recipes[index] = recipe;
      this.recipeChanged.next(this.recipes.slice());

    }

    deleteRecipe(index){
      this.recipes.splice(index,1);
      this.recipeChanged.next(this.recipes.slice());

    }


}
  