import ITodo from "../types/ITodo/ITodo";
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

export const firebaseConfig = {
  apiKey: "AIzaSyDj7WLtdC13Q3Hvq-5ri71glJrnECTfW7I",
  authDomain: "myproject-node-22f23.firebaseapp.com",
  projectId: "myproject-node-22f23",
  storageBucket: "myproject-node-22f23.appspot.com",
  messagingSenderId: "248223924588",
  appId: "1:248223924588:web:274652c160a23282f27349",
};

export const classes = (...args: (string | undefined)[]) => {
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
