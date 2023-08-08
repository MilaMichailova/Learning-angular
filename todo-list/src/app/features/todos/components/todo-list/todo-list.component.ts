import { Component, OnInit } from '@angular/core';
import { CheckableItem } from '../../models/checkable-item';
import * as moment from 'moment';
import { TodoItem } from '../../models/todo-item.js';
import { FormsModule } from '@angular/forms';
import { ArrayType } from '@angular/compiler';
import { TodosSavingService } from '../../services/todos-saving.service.ts.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  providers: [TodosSavingService],
})
export class TodoListComponent implements OnInit {
  public todos: CheckableItem[] = [];
  public newItemDescription: string = '';

  public get todosArray(): CheckableItem[] {
    return this.todos;
  }

  constructor(private TodosSavingService: TodosSavingService) {}

  ngOnInit(): void {
    this.todos = this.TodosSavingService.load();
    console.log(this.todos);
  }

  addNewTask() {
    const todoItem: TodoItem = {
      id: this.todos.length.toString(),
      description: this.newItemDescription,
      createAt: moment(),
    };
    const checkableItem: CheckableItem = {
      checked: false,
      data: todoItem,
    };
    this.todos.push(checkableItem);
    this.newItemDescription = '';
    console.log(this.todos);
    this.TodosSavingService.save(this.todos);
  }

  OnCheckedChange() {
    this.TodosSavingService.save(this.todos);
    console.log('Checked Change And Save');
  }

  removeTask() {
    console.log('todo-list-remove-task');
  }
}
