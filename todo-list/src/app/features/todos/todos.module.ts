import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [TodoListComponent],
  imports: [CommonModule, BrowserModule, SharedModule],
  exports: [TodoListComponent],
})
export class TodosModule {}
