import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { TestRoute2Component } from './test-route2.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: TestRoute2Component
      }
    ])
  ],
  declarations: [TestRoute2Component]
})
export class TestRoute2Module {}
