import React from "react";

function Courses() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
      {/* Left container */}
      <div className="col-span-2">
        Banner
      </div>
      {/* Right container */}
      <div>
        Right section
      </div>
    </div>
  );
}

export default Courses;
