import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Front = ({ audioRef }) => {
  const navigate = useNavigate();
  const [closed, setClosed] = useState(false);

  if (closed) return null; // If "No" is clicked

  const handleYes = () => {
    // Delay both audio and navigation by 0.7 seconds
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play();
      }
      navigate("/home");
    }, 700);
  };

  return (
    <div className="w-380 flex flex-col w-96 max-w-full items-center justify-center min-h-screen bg-green-200">
      <h2 className="text-xl font-bold mb-6 text-center">
        Do you want to remember memory?
      </h2>

      <div className="flex gap-4">
        <button
          onClick={handleYes}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Yes
        </button>
        <button
          onClick={() => setClosed(true)}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          No
        </button>
      </div>
    </div>
  );
};

export default Front;
