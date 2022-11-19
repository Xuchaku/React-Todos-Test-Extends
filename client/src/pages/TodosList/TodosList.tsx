import React from "react";
import Todo from "../../components/Todo/Todo";
import styles from "./TodosList.module.less";

const TodosList = () => {
  return (
    <div className={styles.Container}>
      <Todo></Todo>
      <Todo></Todo>
      <Todo></Todo>
    </div>
  );
};

export default TodosList;
