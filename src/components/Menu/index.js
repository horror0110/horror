import React from "react";
import Menuitem from "../MenuItem";
import css from "./style.module.css";

const Menu = (props) => {
  return (
    <div className={css.Menu}>
      <ul>
        <Menuitem to="/aimshig">Нүүр</Menuitem>
        <Menuitem to="/story">Болсон явдал унших</Menuitem>
        <Menuitem to="/video">Видео</Menuitem>
        <Menuitem to="/feedback">Санал хүсэлт</Menuitem>
      </ul>
    </div>
  );
};

export default Menu;
