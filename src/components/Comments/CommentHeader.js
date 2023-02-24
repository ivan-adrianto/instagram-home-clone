import React from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Chevron } from "../../assets/icons/chevron-left.svg";
import { ReactComponent as SendIcon } from "../../assets/icons/send-icon.svg";

function CommentHeader() {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between px-4 py-2 border-b items-center fixed bg-white z-10 w-full h-11 max-w-md">
      <Chevron
        className="rotate-[270deg] cursor-pointer"
        onClick={() => navigate("/")}
      />
      <p className="font-bold">Comments</p>
      <SendIcon className="cursor-pointer" onClick={() => navigate("/share")} />
    </div>
  );
}

export default CommentHeader;
