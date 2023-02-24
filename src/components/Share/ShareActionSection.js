import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  setModal,
  setReceivers,
  setToastMessage,
} from "../../redux/actionCreators";

function ShareActionSection() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { receivers } = useSelector((state) => state);
  const send = () => {
    if (window.screen.width > 768) {
      dispatch(setModal(""));
    } else {
      navigate("/");
    }
    dispatch(setReceivers([]));
    dispatch(setToastMessage("Sent"));
  };
  return (
    <div className="border-t p-4 w-full max-w-md mt-4 fixed bottom-0 bg-white lg:rounded-b-2xl lg:relative lg:mt-0 lg:max-w-full">
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
