import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';


@Component({
  selector: 'animal-list',
  template: `
<br><br>
  <select (change)="onChange($event.target.value)">
    <option value="allAnimals" selected="selected">All Animals</option>
    <option value="mature">Young Animals</option>
    <option value="young">Mature Animals</option>
  </select>

<br><br>

  <ul>
  <li *ngFor="let currentAnimal of childAnimalList | maturity:filterByMaturity" >{{currentAnimal.name}}
  <button (click)="editButtonHasBeenClicked(currentAnimal)">Edit</button>
  <button (click)="showDetailButtonHasBeenClicked(currentAnimal)">Details</button></li>
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
