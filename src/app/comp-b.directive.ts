import { Directive, Self, ElementRef, AfterViewInit } from '@angular/core';
import { CompBComponent } from './lib-a';

@Directive({
  selector: 'comp-b'
})
export class CompBDirective implements AfterViewInit {

  constructor(@Self() private compa: CompBComponent, private elemRef: ElementRef) {
    console.log('patch directive constructed');
  }

  ngAfterViewInit() {
    // do something
    console.log(this.compa, this.elemRef);
  }

}
