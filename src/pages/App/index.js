import Home from "../Home";
import Toolbar from "../../components/Toolbar";
import Sidebar from "../../components/Sidebar";
import { Routes, Route } from "react-router-dom";
import css from "./style.module.css";
import React, { useState } from "react";
import { SidebarStore } from "../../components/Context/SidebarContext";
import { StoryStore } from "../../components/Context/StoryContext";
import Story from "../Story";
import StoryDetail from "../StoryDetail";
import Video from "../Video";
import FeedbackForm from "../Feedback";
import InsertStory from "../InsertStory";



function App() {
  const [searchValue, setSearchValue] = useState("");


  const onChangeValue = (e) => {
    setSearchValue(e.target.value);
  };
  return (
    <div>
      <SidebarStore>
        <Toolbar  onChangeValue={onChangeValue} />
        <div className={css.Sidebar}>
          <Sidebar />
        </div>
      </SidebarStore>

      <div>
        <StoryStore>
          <Routes>
            <Route path="/horror" element={<Home />} />

            <Route
              path="/story"
              element={<Story searchValue={searchValue} />}
            />

            <Route path="/storyDetail" element={<StoryDetail />} />
            <Route path="/video" element={<Video searchValue={searchValue} />} />
            <Route path="/feedback" element={<FeedbackForm />} />
            <Route path="/insertStory" element={<InsertStory />} />
            
          </Routes>
        </StoryStore>
      </div>
    </div>
  );
}

export default App;
