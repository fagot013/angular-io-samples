import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'Template Syntax';
  currentHero = Hero.heroes[0];
  heroes: Hero[];
  heroImageUrl = 'assets/images/hero.png';
  isUnchanged = false;
  isSpecial = true;
  evilTitle = 'Template <script>alert("evil")</script>Syntax';

  actionName = 'Go for it';
  badCurly = 'bad curly';
  canSave = true;
  fontSizePx = 16;
  currentClasses: {};
  currentStyles: {};


  heroNoTrackByCount = 0;
  heroWithTrackByCount = 0;
  heroesWithTrackByCountReset = 0;
  heroIdIncrement = 1;

  @ViewChildren('noTrackBy') heroesNoTrackBy: QueryList<ElementRef>;
  @ViewChildren('withTrackBy') heroesWithTrackBy: QueryList<ElementRef>;


  ngOnInit(): void {
    this.resetHeroes();
    this.setCurrentClasses();
    this.setCurrentStyles();
  }

  ngAfterViewInit(): void {
    this.trackChanges(this.heroesNoTrackBy, () => this.heroNoTrackByCount++);
    this.trackChanges(this.heroesWithTrackBy, () => this.heroWithTrackByCount++);
  }

  setCurrentStyles() {
    this.currentStyles = {
      'font-style': this.canSave        ? 'italic'  : 'normal',
      'font-weight': !this.isUnchanged  ? 'bold'    : 'normal',
      'font-size': this.isSpecial       ? '24px'    : '12px'
    };
  }

  setCurrentClasses() {
    this.currentClasses = {
      'saveable': this.canSave,
      'modified': this.isUnchanged,
      'special': this.isSpecial
    };
  }

  resetHeroes(): void {
    this.heroes = Hero.heroes.map(hero => hero.clone());
    this.currentHero = this.heroes[0];
    this.heroesWithTrackByCountReset = 0;
  }

  clearTrackByCounts() {
    this.heroWithTrackByCount = this.heroesWithTrackByCountReset;
    this.resetHeroes();
    this.heroIdIncrement = 1;
    this.heroNoTrackByCount = -1;
  }

  deleteHero1(): void {
    console.log(`Deleting hero`);
  }

  deleteHero(hero: Hero): void {
    this.alert(`Delete ${hero ? hero.name : 'the hero'}`);
  }

  onSave(event: KeyboardEvent): void {
    const eventMsg = event ? 'Event target is ' + (<HTMLElement>event.target).textContent : '';
    this.alert('Saved. ' + eventMsg);
    if (event) {
      event.stopPropagation();
    }
  }

  getVal(): number {
    return 2;
  }

  alert(msg?: string): void {
    window.alert(msg);
  }

  setUpperCaseName(name: string) {
    this.currentHero.name = name.toUpperCase();
  }

  trackByHero(index: number, hero: Hero) {
    return hero.id;
  }

  changeIds() {
    this.resetHeroes();
    this.heroes.forEach(h => h.id += 10 + this.heroIdIncrement++);
    this.heroesWithTrackByCountReset = -1;
  }

  callPhone(value: string) {
    this.alert(`Calling ${value} .....`);
  }

  callFax(value: string) {
    this.alert(`Faxing ${value} .....`);
  }


  trackChanges(views: QueryList<ElementRef>, changed: () => void) {
    let oldRef = views.toArray();
    views.changes.subscribe((changes: QueryList<ElementRef>) => {
      const changerRef = changes.toArray();
      const isSame = oldRef.every((v, i) => {
        return v.nativeElement === changerRef[i].nativeElement;
      });
      if (!isSame) {
        oldRef = changerRef;
        setTimeout(changed, 0);
      }
    });
  }

}
