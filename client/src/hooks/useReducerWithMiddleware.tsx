import { useReducer } from "react";
import Action from "../types/Action/Action";
import ITodo from "../types/ITodo/ITodo";

export const useReducerWithMiddleware = (
  reducer: (state: ITodo, action: Action) => ITodo,
  initialState: ITodo | null,
  init: () => ITodo,
  middleware: (action: Action) => boolean
) => {
  const [state, dispatch] = useReducer(reducer, initialState, init);
  const dispatchUsingMiddleware = (action: Action) => {
    if (middleware(action)) dispatch(action);
  };
  return { state, dispatchUsingMiddleware };
};
