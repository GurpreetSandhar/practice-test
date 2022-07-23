import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksComponent } from './tasks/tasks.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserStoriesListComponent } from './user-stories-list/user-stories-list.component';
import { SearchUserStoriesListPipe } from '../pipes/search-user-stories-list.pipe';


@NgModule({
  declarations: [
    TasksComponent,
    UserStoriesListComponent,
    SearchUserStoriesListPipe
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class TasksModule { }
