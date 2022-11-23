import {
  deleteDoc,
  doc,
  Firestore,
  setDoc,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import ITodo from "../types/ITodo/ITodo";

class API {
  constructor() {}
  async addTodo(dataBase: Firestore, todo: ITodo) {
    try {
      await setDoc(doc(dataBase, "todos", `${todo.id}`), {
        ...todo,
        date: Timestamp.fromDate(todo.date),
      });
      return true;
    } catch (error) {
      return false;
    }
  }
  async deleteTodoById(dataBase: Firestore, id: number) {
    try {
      await deleteDoc(doc(dataBase, "todos", `${id}`));
      return true;
    } catch (error) {
      return false;
    }
  }
  async putTodo(dataBase: Firestore, todo: ITodo) {
    return this.addTodo(dataBase, todo);
  }
  async updateTodoById(
    dataBase: Firestore,
    id: number,
    updatedField: { [key: string]: any }
  ) {
    const washingtonRef = doc(dataBase, "todos", `${id}`);
    try {
      await updateDoc(washingtonRef, {
        ...updatedField,
      });
      return true;
    } catch (error) {
      return false;
    }
  }
}

export const api = new API();
