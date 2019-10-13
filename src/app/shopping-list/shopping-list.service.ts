import { Ingerdient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";

export class ShoppingListService{

    newIngredientEvent = new EventEmitter<Ingerdient[]>();

    private ingerdients:Ingerdient[] = [
        new Ingerdient("Appels",5),
        new Ingerdient("Tomatoes",7),
    
      ];


      getIngredients(){
          return this.ingerdients.slice();
      }


      addIngredients(ingredient: Ingerdient){
        this.ingerdients.push(ingredient);
        this.newIngredientEvent.emit(this.ingerdients.slice());
    }

  
    
}