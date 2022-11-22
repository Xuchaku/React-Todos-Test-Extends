import dayjs from "dayjs";
import React, { useLayoutEffect, useState } from "react";
import FormTodo from "../../components/FormTodo/FormTodo";
import Todo from "../../components/Todo/Todo";
import ITodo from "../../types/ITodo/ITodo";
import Button from "../../UI/Button/Button";
import Popup from "../../UI/Popup/Popup";
import styles from "./TodosList.module.less";

const TodosList = () => {
  const [todos, setTodos] = useState<ITodo[]>([
    {
      id: 0,
      title: "Сделать еду",
      date: new Date(2023, 1, 28),
      text: "Some text",
      filesUrl: ["1", "2"],
      isCompleted: false,
      isExpired: false,
    },
    {
      id: 1,
      title: "Сделать еду",
      date: new Date(2018, 1, 2),
      text: "Some text",
      filesUrl: ["1", "2"],
      isCompleted: false,
      isExpired: false,
    },
    {
      id: 2,
      title: "Сделать еду",
      date: new Date(),
      text: "Some text",
      filesUrl: ["1", "2"],
      isCompleted: false,
      isExpired: false,
    },
  ]);
  const [currentEditTodo, setCurrentEditTodo] = useState<ITodo | null>(null);
  useLayoutEffect(() => {
    const expiredTodos = [...todos].map((todo) => {
      const isExpired = dayjs(todo.date).isBefore(new Date());
      console.log(isExpired);
      return { ...todo, isExpired };
    });
    setTodos(expiredTodos);
  }, []);
  function completeTotoById(id: number) {
    const currentTodo = todos.find((todo) => todo.id == id);
    const todoIndex = todos.findIndex((todo) => todo.id == id);
    if (currentTodo) {
      const changedTodos = [...todos];
      changedTodos.splice(todoIndex, 1, { ...currentTodo, isCompleted: true });
      setTodos(changedTodos);
    }
  }
  function deleteTodoById(id: number) {
    setTodos([...todos].filter((todo) => todo.id != id));
  }
  function closePopup() {
    setIsOpen(false);
    setCurrentEditTodo(null);
  }
  function openModal() {
    setIsOpen(true);
  }
  function addTodo(todo: ITodo) {
    setTodos([...todos, todo]);
    closePopup();
  }
  function choseTargetToEdit(id: number) {
    const targetTodo = todos.find((todo) => todo.id == id);
    if (targetTodo) setCurrentEditTodo(targetTodo);
  }
  function changeTodoById(id: number, changedTodo: ITodo) {
    const currentTodo = todos.find((todo) => todo.id == id);
    const todoIndex = todos.findIndex((todo) => todo.id == id);
    if (currentTodo) {
      const changedTodos = [...todos];
      changedTodos.splice(todoIndex, 1, { ...changedTodo });
      setTodos(changedTodos);
      setCurrentEditTodo(null);
      closePopup();
    }
  }
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Popup onClose={closePopup} isOpened={isOpen}>
        <FormTodo
          todos={todos}
          addTodo={addTodo}
          changeTodo={changeTodoById}
          targetTodo={currentEditTodo}
        />
      </Popup>
      <div className={styles.Container}>
        <Button shape="cirle" onClick={openModal}>
          +
        </Button>
        {todos.length > 0 ? (
          todos.map((todo) => {
            return (
              <Todo
                choseTargetToEdit={choseTargetToEdit}
                openModalHandler={openModal}
                completeHandler={completeTotoById}
                deleteHandler={deleteTodoById}
                key={todo.id}
                options={todo}
              />
            );
          })
        ) : (
          <p>Текущих задач нет...</p>
        )}
      </div>
    </>
  );
};

export default TodosList;
