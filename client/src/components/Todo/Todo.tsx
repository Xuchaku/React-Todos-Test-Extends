import React from "react";
import dayjs from "dayjs";
import styles from "./Todo.module.less";
import { ReactComponent as EditSvg } from "./../../assets/svgs/edit-svgrepo-com.svg";
import { ReactComponent as DeleteSvg } from "./../../assets/svgs/delete-svgrepo-com.svg";
import { ReactComponent as FileSvg } from "./../../assets/svgs/file-svgrepo-com.svg";
import Button from "../../UI/Button/Button";
import ITodo from "../../types/ITodo/ITodo";

type TodoPropsType = {
  options: ITodo;
};

const Todo = (props: TodoPropsType) => {
  const { title, date, text, filesUrl, isCompleted, isExpired } = props.options;
  const classComplete = isCompleted ? styles.TodoComplete : undefined;
  return (
    <div className={styles.Todo + " " + classComplete}>
      <div className={styles.MainInfo}>
        <h2 className={styles.Header}>Задача &#183; {title}</h2>
        <div className={styles.RightAction}>
          <EditSvg />
          <DeleteSvg />
        </div>
      </div>
      <span className={styles.TextDate}>
        До &#183; {dayjs(date).format("DD.MM.YYYY")}
      </span>
      <p className={styles.Text}>{text}</p>
      <div className={styles.Files}>
        {filesUrl.map((url) => {
          return <FileSvg />;
        })}
      </div>
      <Button>Выполенно</Button>
    </div>
  );
};

export default Todo;
