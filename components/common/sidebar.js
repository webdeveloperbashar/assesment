import React from "react";
import Accordion from "../Accordion/Accordion";
import { ImCross } from "react-icons/im";

const Sidebar = ({ drawer, setDrawer }) => {
  return (
    <div className={`sidebar_wrapper ${drawer ? "active" : ""}`}>
      <div className="sidebar_inner">
        <div className="sidebar_content">
          <div className="sidebar_header">
            <h3>filter</h3>
            <span>
              <ImCross onClick={() => setDrawer(false)} />
            </span>
          </div>
          <div className="menu_list">
            <Accordion />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
