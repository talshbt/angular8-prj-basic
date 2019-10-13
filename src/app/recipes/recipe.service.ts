import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingerdient } from '../shared/ingredient.model';


export class RecipeService {

   recipeSelected = new EventEmitter<Recipe>();

   private recipes:Recipe[] = [
        new Recipe('Test Recipe',
                  'This is simply a test', 
                  'https://get.pxhere.com/photo/burger-vegetarian-food-dish-hamburger-cuisine-ingredient-breakfast-sandwich-veggie-burger-slider-fast-food-junk-food-produce-sandwich-finger-food-salmon-burger-buffalo-burger-Burger-king-premium-burgers-bun-recipe-cheeseburger-blt-meat-american-food-comfort-food-baked-goods-appetizer-fried-food-Original-chicken-sandwich-patty-1586555.jpg',
                  [
                    new Ingerdient('Meat', 1),
                    new Ingerdient('French Fried', 3)

                  ]) ,
        new Recipe('Another Test Recipe',
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
    
}
  