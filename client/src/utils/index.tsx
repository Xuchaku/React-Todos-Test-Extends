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
    default:
      return state;
  }
};

export const initTodo = () => {
  const initialState: ITodo = {
    id: 1,
    title: "",
    date: new Date(),
    text: "",
    filesUrl: [],
    isCompleted: false,
    isExpired: false,
  };
  return initialState;
};

export const setTitleTodo = (title: string): Action => {
  return { type: actionsName.SET_TITLE_TODO, payload: title };
};
export const setTextTodo = (text: string): Action => {
  return { type: actionsName.SET_TEXT_TODO, payload: text };
};
export const setDateTodo = (date: Date): Action => {
  return { type: actionsName.SET_DATE_TODO, payload: date };
};
export const classes = (...args: string[]) => {
  return args.join(" ");
};
