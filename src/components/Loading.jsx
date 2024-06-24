import React, { useState, useEffect } from "react";
import x from "../img/pedro-unscreen.gif";
import Navbar from "./Navbar";
import HomePage from "./HomePage";
function Loading() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 100);
  }, []);
  return (
    <div>
      {loading ? (
        <div className=" w-auto h-[100vh]  flex justify-center items-center">
          <img className="h-96  flex justify-center items-center " src={x} />
        </div>
      ) : (
        <div>
          <Navbar />
          <HomePage />
        </div>
      )}
    </div>
  );
}

export default Loading;
