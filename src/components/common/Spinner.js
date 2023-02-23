import React from "react";

function Spinner() {
  return (
    <div className="w-8 h-8 border-4 border-gray-200 rounded-full animate-spin border-t-[#1a202c] border-l-[#1a202c]">
      <span className="sr-only">Loading...</span>
    </div>
  );
}

export default Spinner;
