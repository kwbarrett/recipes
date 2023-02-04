import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe( 'A Test Recipe', 'This is simply a test', 'https://i0.wp.com/www.honeybearlane.com/wp-content/uploads/2015/06/e11a57dc1244fe3703e1b803d927d4e2.jpg?fit=600%2C900&ssl=1' ),
    new Recipe( 'A Test Recipe', 'This is simply a test', 'https://i0.wp.com/www.honeybearlane.com/wp-content/uploads/2015/06/e11a57dc1244fe3703e1b803d927d4e2.jpg?fit=600%2C900&ssl=1' )
  ];
  constructor(){

  }

  ngOnInit(){

  }

}
