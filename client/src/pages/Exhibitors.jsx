import React, { useState } from "react";
import AddExhibitor from "../components/AddExhibitor";
import ViewExhibitors from "../components/ViewExhibitors";

const Exhibitors = () => {
  const [exhibitor, setExhibitor] = useState(null);

  return (
    <div className="exhibitors">
      <div>
        <button
          className={exhibitor === "add" ? "button clicked-button" : "button"}
          onClick={() => setExhibitor("add")}
        >
          إضافة عارض
        </button>
        <button
          className={exhibitor === "show" ? "button clicked-button" : "button"}
          onClick={() => setExhibitor("show")}
        >
          قائمة العارضين
        </button>
      </div>

      <div>
        {exhibitor === "add" && <AddExhibitor />}
        {exhibitor === "show" && <ViewExhibitors />}
      </div>
    </div>
  );
};

export default Exhibitors;
