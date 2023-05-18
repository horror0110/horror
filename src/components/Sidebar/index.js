import React, { useContext } from "react";
import css from "./style.module.css";
import Menu from "../Menu";
import SidebarContext from "../Context/SidebarContext";
import Shadow from "../Shadow";

const Sidebar = (props) => {
  const sideBarContext = useContext(SidebarContext);

  return (
    <div>
      <Shadow />
      <div
        style={{
          transform: sideBarContext.showSidebar
            ? "translateX(0)"
            : "translateX(-100vh)",
        }}
        className={css.Sidebar}
      >
        <Menu />
      </div>
    </div>
  );
};

export default Sidebar;
