import React, { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import styles from "./App.module.less";
import TodosList from "./pages/TodosList/TodosList";
import { firebaseConfig } from "./utils";
import { DataBaseContext } from "./context";
import { Firestore } from "@firebase/firestore";

function App() {
  const [firebaseApp, setFirebaseApp] = useState(initializeApp(firebaseConfig));
  const [dataBase, setDataBase] = useState<Firestore>(
    getFirestore(firebaseApp)
  );

  return (
    <DataBaseContext.Provider value={dataBase}>
      <div className={styles.App}>
        <TodosList />
      </div>
    </DataBaseContext.Provider>
  );
}

export default App;
