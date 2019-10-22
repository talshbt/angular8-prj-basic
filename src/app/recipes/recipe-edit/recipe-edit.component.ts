import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
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

    if(this.editMode){
      const recipe = this.recService.getRec(this.id);
      recipeName = recipe.name;
      recipeImgUrl = recipe.imagePath;
      recipeDescription = recipe.description;

    }
    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName),
      'imgUrl': new FormControl(recipeImgUrl),
      'description': new FormControl(recipeDescription),

    })
  }


  onSubmit(){
    console.log(this.recipeForm)
    // this.recService.addNewRecipe(new Recipe('Sexy Buns',
    // 'This is simply a test', 
    // 'https://images.pexels.com/photos/166655/pexels-photo-166655.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    // [
    //   new Ingerdient('Buns', 2),
    //   new Ingerdient('Meat', 4)

    // ]));


  }

}
// this.recipeForm = new FormGroup({
//   'name': new FormControl(null),
//   'recipeDescription': new FormControl(null),
//   'recipeImg': new FormControl(null),
//   'userData': new FormGroup({
//     'name': new FormControl(null),
//     'number': new FormControl(null)
//   })
// })