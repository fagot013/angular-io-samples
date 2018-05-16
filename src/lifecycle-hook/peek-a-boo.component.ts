import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges, OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';
import { LoggerService } from './logger.service';

let nextId = 1;

export class PeekABook implements OnInit {

  constructor( private logger: LoggerService) { }

  ngOnInit(): void {
    this.logIt('OnInit');
  }

  logIt(msg: string) {
    this.logger.log(`#${nextId++}  ${msg}`);
  }

}

@Component({
  selector: 'peek-a-boo',
  template: `
    <p>Now you see my hero, {{name}}</p>
  `,
  styles: ['p {background: LightYellow; padding: 8px}']
})

export class PeekABooComponent extends PeekABook implements
  OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewInit, OnDestroy {
  @Input() name: string;
  private verb = 'initialized';

  constructor (logger: LoggerService) {
    super(logger);
    const is = this.name ? 'is' : 'is not';
    this.logIt(`name ${is} known at construction`);
  }

  ngOnChanges(changes: SimpleChanges): void {
    const changesMsg: string[] = [];
    for (const propName in changes) {
      if (propName === name ) {
        const name = changes[this.name].currentValue;
        changesMsg.push(`name ${this.verb} to ${name}`);
      } else {
        changesMsg.push(propName + ' ' + this.verb);
      }
    }
    this.logIt(`OnChanges: ${changesMsg.join('; ')}`);
    this.verb = 'changed';
  }

  ngAfterContentChecked(): void {
    this.logIt('AfterContentChecked');
  }

  ngAfterContentInit(): void {
    this.logIt('AfterContentInit');
  }

  ngAfterViewInit(): void {
    this.logIt('AfterViewInit');
  }

  ngDoCheck(): void {
    this.logIt('DoCheck');
  }

  ngOnDestroy(): void {
    this.logIt('OnDestroy');
  }

}
