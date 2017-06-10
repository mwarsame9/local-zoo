import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';


@Component({
  selector: 'animal-list',
  template: `

  <select (change)="onChange($event.target.value)">
    <option value="allAnimals" selected="selected">All Animals</option>
    <option value="mature">Animals 2+</option>
    <option value="young">Animals less than 2</option>
  </select>

<br>

  <ul>
  <li *ngFor="let currentAnimal of childAnimalList | maturity:filterByMaturity" >{{currentAnimal.name}}
  <button (click)="editButtonHasBeenClicked(currentAnimal)">Edit Animal</button>
  <button class="btn btn-default btn-sm" (click)="showDetailButtonHasBeenClicked(currentAnimal)">Details</button></li>
  </ul>

  `
})


export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender1 = new EventEmitter();
  @Output() clickSender2 = new EventEmitter();

  filterByMaturity: string = "allAnimals";

  onChange(optionFromMenu) {
    this.filterByMaturity = optionFromMenu;
  }

  editButtonHasBeenClicked(animalToEdit: Animal) {
    this.clickSender1.emit(animalToEdit);
  }
  showDetailButtonHasBeenClicked(animalToShow: Animal) {
    this.clickSender2.emit(animalToShow);
  }

}
