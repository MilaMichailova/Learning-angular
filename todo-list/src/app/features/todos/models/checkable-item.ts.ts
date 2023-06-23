/**
 * Интерфейс элемента с возможностью отметки чекбоксом.
 *
 * @property  {boolean} checked указывает выбрана ли задача.
 * @property  {any} data данные .
 */

export interface CheckableItem {
  checked: boolean;
  data: any;
}
