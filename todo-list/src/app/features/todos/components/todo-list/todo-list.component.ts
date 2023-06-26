import { Component, OnInit } from '@angular/core';
import { CheckableItem } from '../../models/checkable-item.ts';
import * as moment from 'moment';
import { TodoItem } from '../../models/todo-item.ts.js';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  public todos: CheckableItem[] = [];

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
}
