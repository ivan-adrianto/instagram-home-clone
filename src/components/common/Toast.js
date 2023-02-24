import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setToastMessage } from "../../redux/actionCreators";

function Toast() {
  const dispatch = useDispatch();
  const { toastMessage } = useSelector((state) => state);

  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (toastMessage) {
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
        dispatch(setToastMessage(""));
      }, 3000);
    }
    // eslint-disable-next-line
  }, [toastMessage]);
  return (
    <div className={`flex justify-center min-w-full`}>
      <div
        className={`items-center px-4 py-2 w-full max-w-md bg-gray-900 shadow fixed bottom-12 z-10 lg:bottom-0 lg:py-4 
        ${showToast ? "slide-up-down flex" : "hidden"}`}
        role="alert"
      >
        <div className="ml-3 text-sm text-white font-semibold">
          {toastMessage}
        </div>
      </div>
    </div>
  );
}

export default Toast;
