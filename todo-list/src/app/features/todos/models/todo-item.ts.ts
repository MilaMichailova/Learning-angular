import { Moment } from 'moment';

export interface TodoItem {
  id: string;
  description: string;
  createAt: Moment;
}
