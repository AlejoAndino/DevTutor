import React from "react";
import SideNav from "./_components/SideNav";
import Header from "./_components/Header";

const layout = ({ children }) => {
  return (
    <div>
      <div className="fixed sm:block hidden md:w-64">
        <SideNav />
      </div>
      <div className="ml-64">
        <Header />
        {children}
      </div>
    </div>
  );
};

export default layout;
