import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';


@Component({
  selector: 'animal-list',
  template: `

  <ul>
  <li *ngFor="let currentAnimal of childAnimalList" >{{currentAnimal.name}}<button (click)="editButtonHasBeenClicked(currentAnimal)">Edit Animal</button></li>
  </ul>

  `
})


export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender1 = new EventEmitter();
  @Output() clickSender2 = new EventEmitter();


  editButtonHasBeenClicked(animalToEdit: Animal) {
    this.clickSender1.emit(animalToEdit);
  }
  showDetailButtonHasBeenClicked(animalToShow: Animal) {
    this.clickSender2.emit(animalToShow);
  }

}
