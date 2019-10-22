import { Component, OnInit, Output} from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NumberValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id:number;
  constructor(private recipeService:RecipeService, private activateRoute:ActivatedRoute, private router:Router) { }

  ngOnInit() {

    const id = this.activateRoute.params.subscribe(
      (params:Params)=>{
        this.id = +params['id'];
         this.recipe = this.recipeService.getRec(this.id);
      }
    );
  }

  onAddToShoppingList(){
    this.recipeService.addIngredientToShoppingList(this.recipe.ingredients);
  }
  onEdit(){
     this.router.navigate(['edit'], {relativeTo:this.activateRoute});

    // this.router.navigate(['../',this.id,'edit'], {relativeTo:this.activateRoute});

  }

  onDelete(){
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['../'], {relativeTo:this.activateRoute});

  }
}
