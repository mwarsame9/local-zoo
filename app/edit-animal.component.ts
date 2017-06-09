import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';


@Component({
  selector: 'edit-animal',
  template: `
        <div *ngIf="childSelectedAnimal">
          <h3>Edit Animal info</h3>
          <label>Species: </label>
          <input name="animalSpecies" [(ngModel)]="childSelectedAnimal.species"><br>
          <label>Name: </label>
          <input name="animalName" [(ngModel)]="childSelectedAnimal.name"><br>
          <label>Age: </label>
          <input name="animalAge" [(ngModel)]="childSelectedAnimal.age"><br>
          <label>Diet: </label>
          <input name="animalDiet" [(ngModel)]="childSelectedAnimal.diet"><br>
          <label>Location: </label>
          <input name="animalLocation" [(ngModel)]="childSelectedAnimal.location"><br>
          <label>Caretakers: </label>
          <input name="animalCaretakers" [(ngModel)]="childSelectedAnimal.caretakers"><br>
          <label>Sex: </label>
          <input name="animalSex" [(ngModel)]="childSelectedAnimal.sex"><br>
          <label>Likes: </label>
          <input name="animalLikes" [(ngModel)]="childSelectedAnimal.likes"><br>
          <label>Dislikes: </label>
          <input name="animalDislikes" [(ngModel)]="childSelectedAnimal.dislikes"><br>
          <button class="btn btn-success btn-sm" (click)="doneButtonClicked()">Save changes</button>
        </div>
  `
})

export class EditAnimalComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
}
