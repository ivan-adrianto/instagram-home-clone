import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ReactComponent as CloseIcon } from "../../assets/icons/close-icon.svg";
import { setReceivers } from "../../redux/actionCreators";

function NavbarShare() {
  const navigate = useNavigate("/");
  const dispatch = useDispatch();
  const onClose = () => {
    navigate(-1);
    dispatch(setReceivers([]));
  };
  return (
    <div className="flex justify-between items-center h-11 px-4 border-b fixed top-0 w-full bg-white max-w-[470px]">
      <div></div>
      <p className="font-bold">Share</p>
      <CloseIcon onClick={onClose} className="cursor-pointer" />
    </div>
  );
}

export default NavbarShare;
