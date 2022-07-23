import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
  path: '',
  loadChildren: () => import('../tasks/tasks.module').then(m => m.TasksModule),
},
{
  path: 'contact-us',
  loadChildren: () => import('../contact-us/contact-us.module').then(m => m.ContactUsModule),
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseRoutingModule { }
