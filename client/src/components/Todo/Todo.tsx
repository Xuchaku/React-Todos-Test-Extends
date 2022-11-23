import React from "react";
import dayjs from "dayjs";
import ITodo from "../../types/ITodo/ITodo";
import { ReactComponent as EditSvg } from "./../../assets/svgs/edit-svgrepo-com.svg";
import { ReactComponent as DeleteSvg } from "./../../assets/svgs/delete-svgrepo-com.svg";
import { ReactComponent as FileSvg } from "./../../assets/svgs/file-svgrepo-com.svg";
import Button from "../../UI/Button/Button";
import styles from "./Todo.module.less";
import { classes } from "../../utils";

type TodoPropsType = {
  options: ITodo;
  completeHandler: (id: number) => void;
  deleteHandler: (id: number) => void;
  openModalHandler: () => void;
  choseTargetToEdit: (id: number) => void;
};

const Todo = (props: TodoPropsType) => {
  const { title, date, text, filesUrl, isCompleted, isExpired, id } =
    props.options;
  const {
    completeHandler,
    deleteHandler,
    openModalHandler,
    choseTargetToEdit,
  } = props;
  const classComplete = isCompleted ? styles.TodoComplete : undefined;
  const classExpired = isExpired ? styles.TodoExpired : undefined;
  const computedClasses = classes(styles.Todo, classComplete, classExpired);
  function completeHandlerTodo() {
    completeHandler(id);
  }
  function deleteHandlerTodo() {
    deleteHandler(id);
  }
  function editHandlerTodo() {
    choseTargetToEdit(id);
    openModalHandler();
  }
  return (
    <div className={computedClasses}>
      <div className={styles.MainInfo}>
        <h2 className={styles.Header}>Задача &#183; {title + id}</h2>
        <div className={styles.RightAction}>
          <EditSvg onClick={editHandlerTodo} disabled={isExpired} />
          <DeleteSvg onClick={deleteHandlerTodo} />
        </div>
      </div>
      <span className={styles.TextDate}>
        До &#183; {dayjs(date).format("YYYY.MM.DD")}
      </span>
      <p className={styles.Text}>{text}</p>
      <div className={styles.Files}>
        {filesUrl.map((url) => {
          return (
            <>
              <p>{url}</p>
              <FileSvg disabled={isExpired} />
            </>
          );
        })}
      </div>
      {!isCompleted && (
        <Button onClick={completeHandlerTodo} disabled={isExpired}>
          Выполенно
        </Button>
      )}
    </div>
  );
};

export default Todo;
