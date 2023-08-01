import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../../models/todo-item';
import { CheckableItem } from '../../models/checkable-item';
import * as moment from 'moment';

@Component({
  selector: 'exaple-tasks-list',
  templateUrl: './exaple-tasks-list.component.html',
  styleUrls: ['./exaple-tasks-list.component.scss'],
})
export class ExapleTasksListComponent implements OnInit {
  public todos: CheckableItem[] = [];
  public newItemDescription: string = '';

  public get todosArray(): CheckableItem[] {
    return this.todos;
  }

  constructor() {}

  ngOnInit(): void {
    const todoItem: TodoItem = {
      id: '1',
      description: 'Первая задача',
      createAt: moment(),
    };
    const checkableItem: CheckableItem = {
      checked: false,
      data: todoItem,
    };
    this.todos.push(checkableItem);
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
  }

  removeTask() {
    console.log('todo-list-remove-task');
  }
}
