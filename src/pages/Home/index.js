import React from 'react'
import css from "./style.module.css";
import Showcase from '../../components/Showcase';

const Home = () => {
  return (
    <div className={css.Home}>
      <Showcase/>
    </div>
  )
}

export default Home