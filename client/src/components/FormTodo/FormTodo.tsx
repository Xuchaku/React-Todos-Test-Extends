import React, { useMemo, useReducer, useRef, useState } from "react";
import styles from "./FormTodo.module.less";
import ITodo from "./../../types/ITodo/ITodo";
import Input from "../../UI/Input/Input";
import { FocusEvent } from "react";
import {
  classes,
  initTodo,
  reducerTodo,
  setDateTodo,
  setFilesTodo,
  setTextTodo,
  setTitleTodo,
} from "../../utils";
import { useReducerWithMiddleware } from "../../hooks/useReducerWithMiddleware";
import Action from "../../types/Action/Action";
import dayjs from "dayjs";
import Button from "../../UI/Button/Button";
import TextArea from "../../UI/TextArea/TextArea";
import InputFile from "../../UI/InputFile/InputFile";

type FormTodoPropsType = {
  todos: ITodo[];
  submit: (todo: ITodo) => void;
};

const FormTodo = ({ todos, submit }: FormTodoPropsType) => {
  const { state, dispatchUsingMiddleware } = useReducerWithMiddleware(
    reducerTodo,
    {
      id: todos.length,
      title: "",
      date: new Date(),
      text: "",
      filesUrl: [],
      isCompleted: false,
      isExpired: false,
    },
    initTodo,
    isValidFunc
  );
  const [preDateString, setPreDateString] = useState("");
  function changeFieldString(value: string) {
    setPreDateString(value);
  }
  function changeFieldText(action: (value: string) => Action) {
    return function (value: string) {
      dispatchUsingMiddleware(action(value));
    };
  }
  function changeFieldFiles(action: (value: string[]) => Action) {
    return function (value: string[]) {
      dispatchUsingMiddleware(action(value));
    };
  }
  function isValidText(
    event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const value = event.target.value;
    return !!value;
  }
  function submitForm() {
    submit(state);
  }

  function isValidDate(
    event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const value = event.target.value;
    if (value && dayjs(value).isValid()) {
      const year = Number(dayjs(value).format("YYYY"));
      const month = Number(dayjs(value).format("MM"));
      const day = Number(dayjs(value).format("DD"));
      dispatchUsingMiddleware(setDateTodo(new Date(year, month, day)));
      return true;
    } else {
      return false;
    }
  }

  function isValidFunc() {
    return true;
  }
  return (
    <div className={styles.FormTodo}>
      <div className={styles.FormElement}>
        <p>Название</p>
        <Input
          placeholder={"Введите название задачи"}
          type={"text"}
          value={state.title}
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
          onChange={changeFieldString}
          onBlur={isValidDate}
        ></Input>
      </div>
      <div className={styles.FormElement}>
        <p>Описание</p>
        <TextArea
          placeholder={"Введите описание"}
          value={state.text}
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
