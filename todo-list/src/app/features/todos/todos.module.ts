import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ExapleTasksListComponent } from './components/exaple-tasks-list/exaple-tasks-list.component';

@NgModule({
  declarations: [TodoListComponent, ExapleTasksListComponent],
  imports: [CommonModule, BrowserModule, SharedModule, FormsModule],
  exports: [TodoListComponent, ExapleTasksListComponent],
})
export class TodosModule {}
