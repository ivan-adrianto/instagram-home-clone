import React from "react";
import { ReactComponent as HomeIcon } from "../../assets/icons/home-icon.svg";
import { ReactComponent as SearchIcon } from "../../assets/icons/search-icon.svg";
import { ReactComponent as ReelsIcon } from "../../assets/icons/reels-icon.svg";
import { ReactComponent as MessageIcon } from "../../assets/icons/message-icon.svg";

function Navbar() {
  return (
    <div className="flex justify-between bg-white z-20 fixed bottom-0 w-full px-8 py-3 items-center border-t max-w-md lg:hidden">
      <HomeIcon />
      <SearchIcon />
      <ReelsIcon />
      <MessageIcon />
      <img src={require("../../assets/images/my-profile.jpeg")} alt="me" className="rounded-full w-6 h-6" />
    </div>
  );
}

export default Navbar;
