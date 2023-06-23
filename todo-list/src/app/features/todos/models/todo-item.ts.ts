import { Moment } from 'moment';

/**
 * Интерфейс элемента с возможностью установки айди, описания задачи, и отметке о времени создания задачи.
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
