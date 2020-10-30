import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RootPage } from './root.page';

const routes: Routes = [
  {
    path: '',
    component: RootPage,
    children: [
      {path: '', redirectTo: 'today', pathMatch: 'full'},
      {
        path: 'today',
        loadChildren: () => import('../today/today.module').then( m => m.TodayPageModule)
      },
      {
        path: 'future',
        loadChildren: () => import('../future/future.module').then( m => m.FuturePageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RootPageRoutingModule {}
