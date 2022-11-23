import React, {
  useContext,
  useMemo,
  useReducer,
  useRef,
  useState,
} from "react";
import styles from "./FormTodo.module.less";
import ITodo from "./../../types/ITodo/ITodo";
import Input from "../../UI/Input/Input";
import { FocusEvent } from "react";
import {
  setDateTodo,
  setFilesTodo,
  setTextTodo,
  setTitleTodo,
} from "../../utils/actionCreators";
import Action from "../../types/Action/Action";
import dayjs from "dayjs";
import Button from "../../UI/Button/Button";
import TextArea from "../../UI/TextArea/TextArea";
import InputFile from "../../UI/InputFile/InputFile";
import { reducerTodo } from "../../utils/reducer";
import { initTodo, isValidDate, isValidText, parseDate } from "../../utils";
import { api } from "../../API";
import { DataBaseContext } from "../../context";

type FormTodoPropsType = {
  todos: ITodo[];
  addTodo: (todo: ITodo) => void;
  targetTodo: ITodo | null;
  changeTodo: (id: number, changedTodo: ITodo) => void;
};

const FormTodo = ({
  todos,
  addTodo,
  targetTodo,
  changeTodo,
}: FormTodoPropsType) => {
  const dataBase = useContext(DataBaseContext);
  const [todo, dispatch] = useReducer(
    reducerTodo,
    targetTodo || initTodo(todos)
  );
  const [preDateString, setPreDateString] = useState(
    dayjs(todo.date).format("YYYY.MM.DD")
  );

  function changeFieldStringDate(value: string) {
    setPreDateString(value);
    if (isValidDate(value)) {
      const { year, month, day } = parseDate(value);
      dispatch(setDateTodo(new Date(year, month - 1, day)));
    }
  }
  function changeFieldText(action: (value: string) => Action) {
    return function (value: string) {
      dispatch(action(value));
    };
  }
  function changeFieldFiles(action: (value: string[]) => Action) {
    return function (value: string[]) {
      dispatch(action(value));
    };
  }

  function submitForm() {
    if (targetTodo) {
      changeTodo(todo.id, todo);
      api.putTodo(dataBase, todo);
    } else {
      addTodo(todo);
      api.addTodo(dataBase, todo);
    }
  }

  return (
    <div className={styles.FormTodo}>
      <div className={styles.FormElement}>
        <p>Название</p>
        <Input
          placeholder={"Введите название задачи"}
          type={"text"}
          value={todo.title}
          onChange={changeFieldText(setTitleTodo)}
          onBlur={isValidText}
        ></Input>
      </div>
      <div className={styles.FormElement}>
        <p>Дата</p>
        <Input
          messageError={"Дата должна соответствовать формату YYYY.MM.DD"}
          placeholder={"Введите дату"}
          type={"text"}
          value={preDateString}
          onChange={changeFieldStringDate}
          onBlur={isValidDate}
        ></Input>
      </div>
      <div className={styles.FormElement}>
        <p>Описание</p>
        <TextArea
          placeholder={"Введите описание"}
          value={todo.text}
          onChange={changeFieldText(setTextTodo)}
          onBlur={isValidText}
        ></TextArea>
      </div>
      <div className={styles.FormElement}>
        <InputFile uploadFile={changeFieldFiles(setFilesTodo)}></InputFile>
      </div>
      <Button onClick={submitForm}>Сохранить</Button>
    </div>
  );
};

export default FormTodo;
