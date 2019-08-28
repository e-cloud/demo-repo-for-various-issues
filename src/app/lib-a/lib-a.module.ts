import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompAComponent } from './comp-a/comp-a.component';
import { CompBComponent } from './comp-b/comp-b.component';

@NgModule({
  declarations: [CompAComponent, CompBComponent],
  imports: [
    CommonModule
  ],
  exports: [CompAComponent, CompBComponent]
})
export class LibAModule { }
