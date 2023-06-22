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

  constructor() {
    //  объявили переменную туду айтем с типом туду айтем и в нее положили объект
    const todoItem: TodoItem = {
      // свойство объекта туду айтем со значением 1
      id: '1',
      // свойство объекта дескрипшен айтем со значением "Первая задача"
      description: 'Первая задача',
      // тут свойство со значением из фунции
      createAt: moment(),
    };
    //  объявили переменную checkableItem с CheckableItem туду айтем и в нее положили объект
    const checkableItem: CheckableItem = {
      // свойство объекта checked со значением false
      checked: false,
      // свойство объекта data со значением todoItem
      data: todoItem,
    };
    //  в массив туду добавили методлм пуш  объект checkableItem
    this.todos.push(checkableItem);
    console.log(this.todos);
  }

  ngOnInit(): void {}
}
