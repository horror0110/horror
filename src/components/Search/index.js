import React, { useContext } from 'react'
import css from "./style.module.css"
import StoryContext from '../Context/StoryContext'

const Search = (props) => {

    const storyContextValue = useContext(StoryContext)
  return (
    <div>
    <input type="text" onChange={props.onChangeValue} className={css.inputField} placeholder="Enter text" />
  </div>
  )
}

export default Search;