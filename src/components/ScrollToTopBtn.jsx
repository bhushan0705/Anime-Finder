import React, { useEffect, useState } from "react";
import scrollupBtn from "../assets/scrolltoup.png";

const ScrollToTopBtn = () => {
  const [changeScroll, setChangeScroll] = useState(false);

  useEffect(() => {
    const visibility = () => {
      setChangeScroll(window.scrollY > 300); // if more than 300px btn will display
    };

    window.addEventListener("scroll", visibility);

    return () => window.removeEventListener("scroll", visibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    changeScroll && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 p-1 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition z-10"
        aria-label="Scroll to top"
      >
        <img src={scrollupBtn} alt="scrollbtn" className="h-[30px]" />
      </button>
    )
  );
};

export default ScrollToTopBtn;
