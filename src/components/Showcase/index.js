import React, { useEffect, useState } from "react";
import css from "./style.module.css";
import { Link } from "react-router-dom";

const Showcase = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Cleanup the interval when the component unmounts
    return () => {
      clearInterval(timerID);
    };
  }, []);

  return (
    <div className={css.Showcase}>
      <div className={css.ShowcaseText}>
        <p style={{color: "#800808"}}>{currentTime.toLocaleTimeString()}</p>

        <h2>Бидэнд тохиолдсон аймшигт явдлууд</h2>
        <p>
          Бидэнд тохиолдсон аймшигт явдлууд фэйсбүүк групп <br /> дээрх
          постуудаас түүвэрлэж оруулсан болно.
        </p>
        <div className={css.Button}>
          <Link to="/story">УНШИХ</Link>
          <Link
            to="https://www.facebook.com/groups/462888740472437"
            target="_blank"
          >
            ФЭЙСБҮҮКЭЭС УНШИХ
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
