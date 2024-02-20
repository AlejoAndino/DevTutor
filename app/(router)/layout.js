import React from "react";
import SideNav from "./_components/SideNav";

const layout = ({ children }) => {
  return (
    <div>
      <div className="fixed">
        <SideNav />
      </div>
      {children}
    </div>
  );
};

export default layout;
