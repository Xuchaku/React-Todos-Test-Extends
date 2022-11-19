import React, { useState } from "react";
import Todo from "../../components/Todo/Todo";
import ITodo from "../../types/ITodo/ITodo";
import Button from "../../UI/Button/Button";
import Popup from "../../UI/Popup/Popup";
import styles from "./TodosList.module.less";

const TodosList = () => {
  const [todos, setTodos] = useState<ITodo[]>([
    {
      id: 1,
      title: "Сделать еду",
      date: new Date(),
      text: "Some text",
      filesUrl: ["1", "2"],
      isCompleted: true,
      isExpired: false,
    },
  ]);
  function closePopup() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <Popup onClose={closePopup} isOpened={isOpen}>
        str
      </Popup>
      <div className={styles.Container}>
        <Button shape="cirle" onClick={openModal}>
          +
        </Button>
        {todos.map((todo) => {
          return <Todo key={todo.id} options={todo} />;
        })}
      </div>
    </>
  );
};

export default TodosList;
