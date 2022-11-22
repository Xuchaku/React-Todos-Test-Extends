import Action from "../types/Action/Action";
import actionsName from "../types/enumAction/enumAction";
import ITodo from "../types/ITodo/ITodo";

export const reducerTodo = (state: ITodo, action: Action): ITodo => {
  switch (action.type) {
    case actionsName.SET_TITLE_TODO:
      return { ...state, title: action.payload };
    case actionsName.SET_TEXT_TODO:
      return { ...state, text: action.payload };
    case actionsName.SET_DATE_TODO:
      return { ...state, date: action.payload };
    case actionsName.SET_FILES_TODO:
      return { ...state, filesUrl: action.payload };
    default:
      return state;
  }
};
