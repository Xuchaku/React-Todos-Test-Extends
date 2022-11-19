import React from "react";
import styles from "./Todo.module.less";
import { ReactComponent as EditSvg } from "./../../assets/svgs/edit-svgrepo-com.svg";
import { ReactComponent as DeleteSvg } from "./../../assets/svgs/delete-svgrepo-com.svg";
import Button from "../../UI/Button/Button";

const Todo = () => {
  return (
    <div className={styles.Todo}>
      <div className={styles.MainInfo}>
        <h2 className={styles.Header}>Задача &#183; Название</h2>
        <div className={styles.RightAction}>
          <EditSvg />
          <DeleteSvg />
        </div>
      </div>
      <span className={styles.TextDate}>До &#183; 22.08.2023</span>
      <p className={styles.Text}>
        Илья Горюнов семь лет отсидел в тюрьме по ложному обвинению в
        распространении наркотиков. Теперь он выходит на свободу движимый лишь
        одним желанием — отомстить тому мажору Петру, который подбросил ему
        наркотики и поломал жизнь. Встретившись лицом к лицу со своим обидчиком,
        Илья совершает импульсивный поступок и получает доступ к смартфону
        Петра, а с ним и к жизни молодого человека — его фотографиям и видео,
        перепискам с родителями и девушкой Ниной, к странным, полным недомолвок
        и угроз переговорам с коллегами. На время Илья становится для всех
        Петром — через текст на экране телефона.
      </p>
      <Button>Выполенно</Button>
    </div>
  );
};

export default Todo;
