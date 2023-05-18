import React, { useContext } from 'react'
import css from "./style.module.css"
import StoryContext from '../Context/StoryContext'
import {Link} from "react-router-dom"

const StoryList = (props) => {

    const storyContext = useContext(StoryContext);


  return (
    <div className={css.StoryList}>
    {storyContext.story
      .filter((item) => {
        return props.searchValue.toLowerCase() === " "
          ? item
          : item.name.toLowerCase().includes(props.searchValue);
      })
      .map((el) => (
        <Link key={el.name} to="/storyDetail" state={el}  className={css.Griditem} >
          <img
            style={{ width: "250px", height: "300px" }}
            src={el.photo}
            alt="story"
          />
          <p>{el.name}</p>
          <div style={{color: "teal"}}>{el.createdDate}</div>
         
        </Link>
      ))}
  </div>
  )
}

export default StoryList;