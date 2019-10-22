import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';
import { Ingerdient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id:number;
  editMode = false;
  recipeForm:FormGroup;

  constructor(private route: ActivatedRoute, private recService:RecipeService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params:Params)=>{
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();

      }
    )

  }

  private initForm(){
    let recipeName = '';
    let recipeImgUrl = '';
    let recipeDescription = '';
    let recipeIngredients = new FormArray([]);

    if(this.editMode){
      const recipe = this.recService.getRec(this.id);
      recipeName = recipe.name;
      recipeImgUrl = recipe.imagePath;
      recipeDescription = recipe.description;

      if(recipe['ingredients']){
      
        for(let ing of recipe.ingredients){
          recipeIngredients.push(
            new FormGroup({
              'name': new FormControl(ing.name, Validators.required),
              'amount': new FormControl(ing.amount, [Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)])
            })
          );
        }
      }

      console.log(recipeIngredients)
    }


    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'imgUrl': new FormControl(recipeImgUrl,Validators.required),
      'description': new FormControl(recipeDescription,Validators.required),
      'ingredients':recipeIngredients

    })
  }


  onSubmit(){
    // const recipe = new Recipe(
      // this.recipeForm.value['name'],
      // this.recipeForm.value['description'],
      // this.recipeForm.value['imgUrl'],
      // this.recipeForm.value['ingredients']);
    if(this.editMode){
      this.recService.updateRecipe(this.id, this.recipeForm.value);
    }else{
      this.recService.addNewRecipe(this.recipeForm.value);
    }
    this.recService.getRecipe();

    
  }

  onAddIngredient(){
   (<FormArray>this.recipeForm.get('ingredients')).push(new FormGroup({
     'name':new FormControl(null,Validators.required),
     'amount':new FormControl(null,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)])
   }));

  }

}
