import React, { useContext, useLayoutEffect, useState } from "react";
import dayjs from "dayjs";
import { collection } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import ITodo from "../../types/ITodo/ITodo";
import { api } from "../../API";
import { DataBaseContext } from "../../context";
import FormTodo from "../../components/FormTodo/FormTodo";
import Todo from "../../components/Todo/Todo";
import Button from "../../UI/Button/Button";
import Popup from "../../UI/Popup/Popup";

import styles from "./TodosList.module.less";

const TodosList = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [currentEditTodo, setCurrentEditTodo] = useState<ITodo | null>(null);

  const dataBase = useContext(DataBaseContext);
  const [valuesFromBack, loading, error] = useCollection(
    collection(dataBase, "todos")
  );

  const [isOpen, setIsOpen] = useState(false);
  useLayoutEffect(() => {
    if (!loading) {
      const todosFromBack = valuesFromBack?.docs.map((doc) => {
        const data = doc.data();
        return { ...doc.data(), date: new Date(data.date.seconds * 1000) };
      });
      const expiredTodos = [...(todosFromBack as ITodo[])].map((todo) => {
        const isExpired = dayjs(todo.date).isBefore(new Date());
        return { ...todo, isExpired };
      });
      setTodos(expiredTodos);
    }
  }, [loading]);

  function completeTotoById(id: number) {
    const currentTodo = todos.find((todo) => todo.id == id);
    const todoIndex = todos.findIndex((todo) => todo.id == id);
    if (currentTodo) {
      const changedTodos = [...todos];
      const changedTodo = { ...currentTodo, isCompleted: true };
      changedTodos.splice(todoIndex, 1, changedTodo);
      setTodos(changedTodos);
      api.updateTodoById(dataBase, id, { isCompleted: true });
    }
  }

  function deleteTodoById(id: number) {
    setTodos([...todos].filter((todo) => todo.id != id));
    api.deleteTodoById(dataBase, id);
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
        <Button shape="circle" onClick={openModal}>
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
