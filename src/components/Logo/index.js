import React from 'react'
import LogoImg from "../../assets/redlogo.png"
import css from "./style.module.css";
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <div className={css.Logo}>
      <Link to="/horror"><img src={LogoImg} alt="logo" /></Link>
        
    </div>
  )
}

export default Logo