import React from "react";
import backBtn from "../assets/previous-827eca8d.png";

const BackButton = () => {
  function handleBackBtn() {
    window.history.back();
  }

  return (
    <div className="p-2 sm:p-4">
      <img
        src={backBtn}
        alt="back"
        onClick={handleBackBtn}
        className="h-[30px] sm:h-[40px] cursor-pointer hover:scale-110 transition-transform duration-300"
      />
    </div>
  );
};

export default BackButton;
