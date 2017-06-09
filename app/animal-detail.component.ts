import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';


@Component({
  selector: 'animal-detail',
  template: `
    <div *ngIf="childSelectedAnimalDetail">
      <ul>
        <li> <b>Species:</b>  {{childSelectedAnimalDetail.species}} </li>
        <li> <b>Name:</b>  {{childSelectedAnimalDetail.name}} </li>
        <li> <b>Age:</b>   {{childSelectedAnimalDetail.age}} </li>
        <li> <b>Diet:</b>   {{childSelectedAnimalDetail.diet}} </li>
        <li> <b>Location:</b> {{childSelectedAnimalDetail.location}} </li>
        <li> <b>Caretakers:</b>   {{childSelectedAnimalDetail.caretakers}} </li>
        <li> <b>Sex:</b>   {{childSelectedAnimalDetail.sex}} </li>
        <li> <b>Likes:</b>   {{childSelectedAnimalDetail.likes}} </li>
        <li> <b>Dislikes:</b>   {{childSelectedAnimalDetail.dislikes}} </li>
      </ul>
      <button class="btn btn-default btn-sm" (click)="hideButtonClicked()">Hide Details</button>
    </div>
  `
})


export class AnimalDetailComponent {
  @Input() childSelectedAnimalDetail: Animal;
  @Output() hideButtonClickedSender = new EventEmitter();

  hideButtonClicked() {
    this.hideButtonClickedSender.emit();
  }
}
