import React, { useState } from "react";
import FormTodo from "../../components/FormTodo/FormTodo";
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
  function addTodo(todo: ITodo) {
    setTodos([...todos, todo]);
  }
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <Popup onClose={closePopup} isOpened={isOpen}>
        <FormTodo todos={todos} submit={addTodo} />
      </Popup>
      <div className={styles.Container}>
        <Button shape="cirle" onClick={openModal}>
          +
        </Button>
        {todos.length > 0 ? (
          todos.map((todo) => {
            return <Todo key={todo.id} options={todo} />;
          })
        ) : (
          <p>Текущих задач нет...</p>
        )}
      </div>
    </>
  );
};

export default TodosList;
