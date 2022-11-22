import Action from "../types/Action/Action";
import actionsName from "../types/enumAction/enumAction";

export const setTitleTodo = (title: string): Action => {
  return { type: actionsName.SET_TITLE_TODO, payload: title };
};
export const setTextTodo = (text: string): Action => {
  return { type: actionsName.SET_TEXT_TODO, payload: text };
};
export const setDateTodo = (date: Date): Action => {
  return { type: actionsName.SET_DATE_TODO, payload: date };
};
export const setFilesTodo = (files: string[]): Action => {
  return { type: actionsName.SET_FILES_TODO, payload: files };
};
