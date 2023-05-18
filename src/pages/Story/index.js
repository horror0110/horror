import React from 'react'
import StoryList from '../../components/StoryList';

const Story = (props) => {
  return (
    <div>
        <StoryList searchValue={props.searchValue}/>
    </div>
  )
}

export default Story;