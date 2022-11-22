import Action from "../types/Action/Action";
import actionsName from "../types/enumAction/enumAction";
import ITodo from "../types/ITodo/ITodo";

import { FocusEvent } from "react";
import dayjs from "dayjs";

export const initTodo = (todos: ITodo[]) => {
  const initialState: ITodo = {
    id: todos.length,
    title: "",
    date: new Date(),
    text: "",
    filesUrl: [],
    isCompleted: false,
    isExpired: false,
  };
  return initialState;
};

export const classes = (...args: string[]) => {
  return args.join(" ");
};

export const isValidText = function (value: string) {
  return !!value;
};

export const isValidDate = function (value: string) {
  return !!(value && dayjs(value).isValid());
};

export const parseDate = function (value: string) {
  const year = Number(dayjs(value).format("YYYY"));
  const month = Number(dayjs(value).format("MM"));
  const day = Number(dayjs(value).format("DD"));
  return { year, month, day };
};
