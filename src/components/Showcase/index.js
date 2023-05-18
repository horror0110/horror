import React from "react";
import css from "./style.module.css";
import { Link } from "react-router-dom";

const Showcase = () => {
  return (
    <div className={css.Showcase}>
      <div className={css.ShowcaseText}>
        <h2>Бидэнд тохиолдсон аймшигт явдлууд</h2>
        <p>
          Бидэнд тохиолдсон аймшигт явдлууд фэйсбүүк групп <br /> дээрх
          постуудаас түүвэрлэж оруулсан болно.
        </p>
        <div className={css.Button}>
          <Link to="/story">УНШИХ</Link>
          <Link to="https://www.facebook.com/groups/462888740472437" target="_blank">ФЭЙСБҮҮКЭЭС УНШИХ</Link>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
