import { Component, Input } from '@angular/core';
import { LoggerService } from './logger.service';
import { Hero } from '../template-syntax/hero';


@Component({
  selector: 'spy-parent',
  templateUrl: './spy.component.html',
  styles: [
    '.parent {background: khaki}',
    '.heroes {background: LightYellow; padding: 0 8px}'
  ],
  providers: [LoggerService]
})
export class SpyParentComponent {
  newName = 'Herbie';
  heroes: string[] = ['Windstorm', 'Magneta'];

  constructor (public logger: LoggerService) {

  }

  addHero() {
    if (this.newName.trim()) {
      this.heroes.push(this.newName.trim());
      this.newName = '';
      this.logger.tick();
    }
  }

  removeHero( hero: Hero) {

  }

  reset() {
    this.logger.log('-----reset-----');
    this.heroes = [];
    this.logger.tick();
  }

}
