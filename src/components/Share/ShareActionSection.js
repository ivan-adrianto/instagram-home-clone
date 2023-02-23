import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setReceivers, setToastMessage } from "../../redux/actionCreators";

function ShareActionSection() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { receivers } = useSelector((state) => state);
  const send = () => {
    navigate("/");
    dispatch(setReceivers([]));
    dispatch(setToastMessage("Sent"));
  };
  return (
    <div className="border-t p-4 w-full mt-4 fixed bottom-0 bg-white max-w-[470px]">
      {receivers.length > 0 && (
        <input
          type="text"
          className="outline-none border-none w-full h-12 mb-4 text-sm"
          placeholder="Write a message..."
        />
      )}
      <button
        className={`font-bold w-full rounded-md h-11 text-white text-sm ${
          receivers.length > 0 ? "bg-blue-500" : "bg-sky-400"
        }`}
        disabled={receivers.length === 0}
        onClick={send}
      >
        Send
      </button>
    </div>
  );
}

export default ShareActionSection;
