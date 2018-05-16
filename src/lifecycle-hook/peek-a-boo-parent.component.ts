import {Component} from '@angular/core';
import { LoggerService } from './logger.service';

@Component({
  selector: 'peek-a-boo-parent',
  template: `
    <div class="parent">
      <h2>Peek A Boo</h2>
      <button (click)="toggleChild()">
        {{hasChild ? 'Destroy' : 'Create'}} PeekAButtonComponent
      </button>
      <button (click)="updateHero()"  [hidden]="!hasChild">Update Hero</button>
      <peek-a-boo *ngIf="hasChild" [name]="heroName"></peek-a-boo>
      <h4>-- Lyfecycle Hooks Log --</h4>
      <div *ngFor="let msg of hookLogs">{{msg}}</div>
    </div>
  `,
  providers: [LoggerService],
  styles: ['.parent {background: moccasin}']
})

export class PeekABooParentComponent {
  hasChild = false;
  hookLogs: string[];
  heroName = 'WindStorm';

  constructor( private logger: LoggerService) {
    this.hookLogs = this.logger.logs;
  }

  toggleChild() {
    this.hasChild = !this.hasChild;
    if (this.hasChild) {
      this.logger.clear();
      this.heroName = 'WindStorm';
    }
    this.hookLogs = this.logger.logs;
    this.logger.tick();
  }

  updateHero() {
    this.heroName += '!';
    this.logger.tick();
  }

}
