import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[]=[
        new Recipe('A Test Recipe','This is simply a test','https://www.vegrecipesofindia.com/wp-content/uploads/2017/12/biscuit-cake-recipe.jpg',[
          new Ingredient('Meat',2),
          new Ingredient('water',1)
        ]),
        new Recipe('Another Test Recipe','This is simply a test','https://www.vegrecipesofindia.com/wp-content/uploads/2017/12/biscuit-cake-recipe.jpg',[
          new Ingredient('Chicken',2),
          new Ingredient('Coke',1)
        ])
      ];
      constructor(private slService: ShoppingListService){

      }

      getRecipes(){
        return this.recipes.slice();
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
      }
}