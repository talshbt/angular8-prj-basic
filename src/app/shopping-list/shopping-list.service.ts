import { Ingerdient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs";

export class ShoppingListService{

    // newIngredientEvent = new EventEmitter<Ingerdient[]>();
    newIngredientEvent = new Subject<Ingerdient[]>();
    startedEditing = new Subject<number>();

    private ingerdients:Ingerdient[] = [
        new Ingerdient("Appels",5),
        new Ingerdient("Tomatoes",7),
    
      ];


      getIngredients(){
          return this.ingerdients.slice();
      }


      addIngredient(ingredient: Ingerdient){
        this.ingerdients.push(ingredient);
        // this.newIngredientEvent.emit(this.ingerdients.slice());
        this.newIngredientEvent.next(this.ingerdients.slice());

    }

    addIngrediens(ingredients: Ingerdient[]){
    //    for(let ingredient of ingredients){
    //        this.addIngredient(ingredient);

    //    }

        this.ingerdients.push(...ingredients);

        // this.newIngredientEvent.emit(this.ingerdients.slice());

        this.newIngredientEvent.next(this.ingerdients.slice());

    }

  
    
}