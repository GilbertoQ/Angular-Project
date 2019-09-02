import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

   private recipes: Recipe[] = [
     new Recipe(
       'Hamburger',
       'A simple hamburger!',
       'https://upload.wikimedia.org/wikipedia/commons/0/0b/RedDot_Burger.jpg',
       [new Ingredient('Meat', 1), new Ingredient('Buns', 2)]
     ),
     new Recipe(
       'Steak',
       'Classic Steak',
       'https://upload.wikimedia.org/wikipedia/commons/2/2b/Beef_fillet_steak_with_mushrooms.jpg',
       [new Ingredient('Meat', 2), new Ingredient('French Fries', 20)]
     )
   ];
  //private recipes: Recipe[] = [];

  constructor(private slService: ShoppingListService) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
