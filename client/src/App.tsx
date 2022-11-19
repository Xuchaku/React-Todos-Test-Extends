import React from "react";
import { Route, Routes } from "react-router-dom";
import styles from "./App.module.less";
import TodosList from "./pages/TodosList/TodosList";

function App() {
  return (
    <div className={styles.App}>
      <Routes>
        <Route path="/" element={<TodosList />}></Route>
        <Route path="/todo/:id" element={null}></Route>
      </Routes>
    </div>
  );
}

export default App;
