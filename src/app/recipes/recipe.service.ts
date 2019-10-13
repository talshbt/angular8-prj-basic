import { Recipe } from './recipe.model';


export class RecipeService {
   private recipes:Recipe[] = [
        new Recipe('Test Recipe','This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg') ,
        new Recipe('Another Test Recipe','This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
      ];


    //   recipeSelected(item:Recipe){

    //     // this.recipeWasSelected.emit(item);
    
    //   }


    getRecipe(){
        //only get a copy and not the refernce inself- more private now
        return this.recipes.slice();
    }
    
}
  