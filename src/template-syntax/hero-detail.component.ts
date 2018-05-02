import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Hero } from './hero';


@Component({
  selector: 'app-hero-detail',
  template: `
    <div>
      <img src="{{heroImageUrl}}" style="height: 30px">
      <span [style.text-decoration]="lineTrough">{{prefix}}{{hero?.name}}</span>
      <button (click)="delete()">Delete</button>
    </div>
  `
})
export class HeroDetailComponent {
  @Input()
  hero: Hero = new Hero(1, 'Zzzzz');
  @Input()
  prefix = '';
  heroImageUrl = 'assets/images/hero.png';

  lineTrough = '';
  @Output()
  deleteRequest = new EventEmitter();

  delete() {
    this.deleteRequest.emit(this.hero);
  }

}
