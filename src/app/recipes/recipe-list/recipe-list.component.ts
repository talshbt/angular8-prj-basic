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


 
  constructor(private recipeService:RecipeService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipe();

  }

  onNewRecipe(){
    this.router.navigate(['new'], {relativeTo: this.route});

  }








}
