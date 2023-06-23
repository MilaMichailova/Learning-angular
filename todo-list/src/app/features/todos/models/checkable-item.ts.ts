/**
 * Интерфейс элемента с возможностью отметки чекбоксом.
 *
 * @property  {boolean} checked Указывает выбрана ли задача.
 * @property  {any} data Данные .
 */

export interface CheckableItem {
  checked: boolean;
  data: any;
}
