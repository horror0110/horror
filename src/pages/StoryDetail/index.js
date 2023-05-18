import React from 'react'
import {useLocation} from "react-router-dom"
import css from "./style.module.css"

const StoryDetail = () => {
    const location = useLocation();
  const data = location.state;
  return (
    <div className={css.StoryDetail}>
        <div className={css.Detail}>
        <h2>{data.name}</h2>
           <p>{data.story}</p>
           <div className={css.Author}>Постолсон : {data.author}    </div>
           <div style={{color: "teal"}}>Хандалт: {data.reaction}</div>

           <div style={{marginTop: 15}}>{data.postDate}</div>
           
        </div>
           
          

    </div>
   
  )
}

export default StoryDetail;