import React from "react";
import "../styles/SidebarContainer.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-label">
        <span>Request</span>
      </div>
      <div className="sidebar-label">
        <span>Response</span>
      </div>
    </div>
  );
};

export default Sidebar;
