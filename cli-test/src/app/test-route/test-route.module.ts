import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { TestRouteComponent } from './test-route.component'
import { NgPipesModule } from 'ngx-pipes'

@NgModule({
  imports: [
    CommonModule,
    NgPipesModule,
    RouterModule.forChild([
      {
        path: '',
        component: TestRouteComponent
      }
    ])
  ],
  declarations: [
    TestRouteComponent,
  ]
})
export class TestRouteModule {}
