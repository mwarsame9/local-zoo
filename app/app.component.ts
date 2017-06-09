import { Component, Input } from '@angular/core';
import { Animal } from './animal.model';


@Component({ 
  selector: 'app-root',
  template: `
  <div class="container">

  <animal-list [childAnimalList]="masterAnimalList" (clickSender1)="editAnimal($event)" (clickSender2)="showAnimal($event)"></animal-list>


  </div>

  <hr>
  <edit-animal [childSelectedAnimal]="selectedAnimal" (doneButtonClickedSender)="finishedEditing()" ></edit-animal>


  `
})


export class AppComponent {
  masterAnimalList: Animal[] = [ new Animal('Arctic Fox', 'Moon', 2, 'Carnivore', 'Northern Trail', 5, 'Female', 'Cool shade', 'Loud noises'),
  new Animal('Ocelot', 'Prince', 4, 'Carnivore', 'Tropical Rain Forest Building', 6, 'Male', 'Laying in the sunshine', 'Toys that are not rope-based'),
  new Animal('Northwest Black Tailed Deer', 'Tinkerbell', 8, 'Herbivore', 'Northern Trail', 2, 'Female', 'Delicate roots and leaves', 'Loud Noises'),
];
selectedAnimal: null;
  // used to be "selectedAnimalDetail: null;" but this caused build errors

  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
  }

  finishedEditing() {
    this.selectedAnimal = null;
  }

}
