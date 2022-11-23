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
// export const firebaseConfig = {
//   apiKey: "AIzaSyDgU_zEkTBZ1UmdphthqzOA-qhLJUEbhy4",
//   authDomain: "back-node-73906.firebaseapp.com",
//   databaseURL: "https://back-node-73906-default-rtdb.firebaseio.com",
//   projectId: "back-node-73906",
//   storageBucket: "back-node-73906.appspot.com",
//   messagingSenderId: "955739424265",
//   appId: "1:955739424265:web:05136054a29682e4cc9ad8",
// };
export const firebaseConfig = {
  apiKey: "AIzaSyDj7WLtdC13Q3Hvq-5ri71glJrnECTfW7I",
  authDomain: "myproject-node-22f23.firebaseapp.com",
  projectId: "myproject-node-22f23",
  storageBucket: "myproject-node-22f23.appspot.com",
  messagingSenderId: "248223924588",
  appId: "1:248223924588:web:274652c160a23282f27349",
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
