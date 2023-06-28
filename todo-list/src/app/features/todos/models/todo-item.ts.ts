import { Moment } from 'moment';

/**
 * Интерфейс элемента с возможностью установки айди, описания задачи, и отметке о времени создания задачи.
 *
 * @property  {string} id Идентификатор элемента.
 * @property  {string} description Описание задачи.
 * @property  {Moment} createAt Время создания задачи.
 */

export interface TodoItem {
  id: string;
  description: string;
  createAt: Moment;
}
