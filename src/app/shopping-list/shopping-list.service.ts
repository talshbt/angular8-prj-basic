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

      getIngredient(index:number){
          return this.ingerdients[index];
     }

      addIngredient(ingredient: Ingerdient){
        this.ingerdients.push(ingredient);
        // this.newIngredientEvent.emit(this.ingerdients.slice());
        this.newIngredientEvent.next(this.ingerdients.slice());

    }

    addIngrediens(ingredients: Ingerdient[]){
 
        this.ingerdients.push(...ingredients);

        this.newIngredientEvent.next(this.ingerdients.slice());

    }

    updateIngredient(index, newIngredient: Ingerdient){
        this.ingerdients[index] = newIngredient;
        this.newIngredientEvent.next(this.ingerdients.slice());
    }

    deleteIngredient(index){
        this.ingerdients.splice(index,1);
        this.newIngredientEvent.next(this.ingerdients.slice());

    }

  
    
}