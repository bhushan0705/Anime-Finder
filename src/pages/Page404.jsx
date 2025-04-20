import React, { useEffect } from "react";
import pg404Img from "../assets/404-error-page-svg-animation.mp4";
import Navbar from "../routes/Navbar";

const Page404 = () => {
  useEffect(() => {
    // Prevent scrolling
    document.body.style.overflow = "hidden";
    return () => {
      // Restore scroll when component unmounts
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <>
      <div className="absolute top-0 z-50">
        <Navbar />
      </div>

      <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
        <video
          src={pg404Img}
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        />
      </div>
    </>
  );
};

export default Page404;
