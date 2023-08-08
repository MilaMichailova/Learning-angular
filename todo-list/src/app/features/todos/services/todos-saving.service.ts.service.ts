import { Injectable } from '@angular/core';
import { CheckableItem } from '../models/checkable-item';

@Injectable({
  providedIn: 'root',
})
export class TodosSavingService {
  constructor() {}
  save(tasks: CheckableItem[]): void {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    console.log('i`m saving!', tasks);
  }
  load(): CheckableItem[] {
    return JSON.parse(localStorage.getItem('tasks') ?? '');
  }
}
