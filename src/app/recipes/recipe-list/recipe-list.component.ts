import { Component, OnInit, Output,EventEmitter, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Ingerdient } from 'src/app/shared/ingredient.model';
import { FormGroup, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit,OnDestroy {

  recipes:Recipe []=[];
  sub:Subscription;

  constructor(private recipeService:RecipeService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit() {
    //when recpies change(add, update or remove)
    this.sub = this.recipeService.recipeChanged.subscribe(
      (recipes:Recipe[])=>{
        this.recipes=recipes;
      }
    );
    this.recipes = this.recipeService.getRecipe();

  }

  onNewRecipe(){
    this.router.navigate(['new'], {relativeTo: this.route});

  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }








}
