import { Directive, OnDestroy, OnInit } from '@angular/core';
import { LoggerService } from './logger.service';

let nextId = 1;

@Directive({
  selector: '[mySpy]'
})
export class SpyDirective implements OnInit, OnDestroy {

  constructor(private logger: LoggerService) { }

  ngOnDestroy(): void {
    this.logIt('onDestroy');
  }

  ngOnInit(): void {
    this.logIt('onInit');
  }

  private logIt(msg: string) {
    this.logger.log(`Spy #${nextId++} ${msg}`);
  }


}
