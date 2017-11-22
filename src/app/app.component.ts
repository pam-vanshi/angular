import { Component } from '@angular/core';
import { ModalService } from './modal/modal.service';
import { Hero } from './modal';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
  <button (click)='modalService.open(modalId)'>Open Modal</button>
  <app-modal [modalTitle]="'Some title'" [blocking]='false' [modalId]='modalId'>

    <div>Some text here</div>

  </app-modal>
  <a routerLink="/page2"><button class="btn btn-success pull-right" > Go to another page</button></a>


  `
})
export class AppComponent {
  modalId = 'hoplaModal';

  constructor(
    public modalService: ModalService
  ) {}
}
