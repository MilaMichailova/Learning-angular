import { Moment } from 'moment';

/**
 * создает интерфейс TodoItem как кастомный тип днных без реализации .
 *
 * @property  {string} id айди айтема.
 * @property  {string} description описание задачи.
 * @property  {Moment} createAt, время создания задачи.
 */

export interface TodoItem {
  id: string;
  description: string;
  createAt: Moment;
}
