import { Component } from '@angular/core';
import { ModalService } from './modal/modal.service';
import { Hero } from './modal';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
  <button (click)='modalService.open(modalId)'>Open Modal</button>
  <app-modal [modalTitle]="'Some title'" [blocking]='false' [modalId]='modalId'>

    <div><input #hero type="text" [ngModel]="hero.name" required>
    <p>{{hero.name}}</p></div>

  </app-modal>
  <a routerLink="/page-2"><button> Go to second page</button></a>
  `
})
export class AppComponent {
  modalId = 'hoplaModal';

  constructor(
    public modalService: ModalService
  ) {}
}
