import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-sizer',
  template: `
    <div>
      <button (click)="dec()" title="smaller">-</button>
      <button (click)="inc()" title="bigger">+</button>
      <label [style.font-size.px]="size">FontSize:{{size}}</label>
    </div>
  `
})
export class SizerComponent {
  @Input()
  size: number | string;
  @Output()
  sizeChange = new EventEmitter<number>();

  inc() { this.resize(+1);  }
  dec() { this.resize(-1);  }

  resize(delta: number) {
    // debugger;
    this.size = Math.min(40, Math.max(8, +this.size + delta));
    this.sizeChange.emit(this.size);
  }
}
