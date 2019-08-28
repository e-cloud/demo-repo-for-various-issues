import { NgModule } from '@angular/core';
import { CompAComponent, CompBComponent } from './lib-a';
import { CommonModule } from '@angular/common';
import { CompBDirective } from './comp-b.directive';

@NgModule({
  declarations: [CompAComponent, CompBComponent, CompBDirective],
  imports: [
    CommonModule
  ],
  exports: [CompAComponent, CompBComponent]
})
export class CustomLibAModule { }
