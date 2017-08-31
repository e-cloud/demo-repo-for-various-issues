import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  {
    path: 'test-route',
    loadChildren: 'app/test-route/test-route.module#TestRouteModule',
  },
  {
    path: 'test-route2',
    loadChildren: 'app/test-route2/test-route2.module#TestRoute2Module',
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
