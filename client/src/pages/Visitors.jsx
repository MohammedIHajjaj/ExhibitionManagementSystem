import React, { useState } from "react";
import AddVisitor from "../components/AddVisitor";
import ViewVisitors from "../components/ViewVisitors";

const Visitors = () => {
  const [visitor, setVisitor] = useState(null);

  return (
    <div className="Visitors">
      <div>
        <button
          className={visitor === "add" ? "button clicked-button" : "button"}
          onClick={() => setVisitor("add")}
        >
          إضافة زائر
        </button>
        <button
          className={visitor === "show" ? "button clicked-button" : "button"}
          onClick={() => setVisitor("show")}
        >
          قائمة الزوار
        </button>
      </div>

      <div>
        {visitor === "add" && <AddVisitor />}
        {visitor === "show" && <ViewVisitors />}
      </div>
    </div>
  );
};

export default Visitors;
