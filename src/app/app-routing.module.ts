import { BaseComponent } from './base/base.component';
import { SideBarComponent } from './shared/side-bar/side-bar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component :BaseComponent,
    loadChildren: () => import('./base/base.module').then(m => m.BaseModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
