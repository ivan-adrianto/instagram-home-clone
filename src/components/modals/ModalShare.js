import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setModal } from "../../redux/actionCreators";
import NavbarShare from "../Share/ShareHeader";
import SearchContact from "../Share/SearchContact";
import ShareActionSection from "../Share/ShareActionSection";
import SuggestionList from "../Share/SuggestionList";

function ModalShare() {
  const dispatch = useDispatch();
  const onClose = () => dispatch(setModal(""));

  const { modal, receivers } = useSelector((state) => state);

  const ref = useRef(null);

  const handleClickOutside = (event) => {
    if (event.target.classList.contains("modal-backdrop")) {
      onClose();
    }
  };

  return (
    <div
      className={`h-screen w-screen justify-center items-center ${
        modal !== "share" && "hidden"
      }`}
      onClick={handleClickOutside}
    >
      <div
        className={`fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full bg-black bg-opacity-30 flex justify-center items-center modal-backdrop`}
      >
        <div className="relative w-screen h-screen max-w-2xl md:h-auto px-0 pt-0">
          <div
            ref={ref}
            className={`relative bg-white rounded-t-xl shadow h-[617px] w-[588px] 
            ${modal === "share" && "slide-in"} ${receivers.length === 0 && 'rounded-b-xl'}`}
          >
            <NavbarShare />
            <SearchContact />
            <SuggestionList />
            <ShareActionSection />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalShare;
