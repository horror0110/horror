import React , {useContext} from 'react'
import css from "./style.module.css";
import StoryContext from '../../components/Context/StoryContext';
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom';

const Video = (props) => {

    const storyVideoContext = useContext(StoryContext);
  return (
    <div className={css.StoryList}>
    {storyVideoContext.videoStory
      .filter((item) => {
        return props.searchValue.toLowerCase() === " "
          ? item
          : item.name.toLowerCase().includes(props.searchValue);
      })
      .map((el) => (
        <Link key={el.name}   className={css.Griditem} >
         <ReactPlayer url={el.video} controls={true} width={"250px"} />
          <p>{el.name}</p>
         <div style={{color: "teal"}}>{el.createdDate}</div>
        </Link>
      ))}
  </div>
  )
}

export default Video;