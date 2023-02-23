import React from "react";
import { ReactComponent as InstagramLogo } from "../../assets/images/logo.svg";
import { ReactComponent as Chevron } from "../../assets/icons/chevron-down.svg";
import { ReactComponent as UploadIcon } from "../../assets/icons/big-plus-icon.svg"
import { ReactComponent as LoveIcon } from "../../assets/icons/love-icon.svg"

function HomeHeader() {
  return (
    <div className="flex justify-between px-4 py-2 border-b items-center fixed bg-white z-10 w-full max-w-[470px]" >
      <div className="flex gap-2 items-center">
        <InstagramLogo />
        <Chevron />
      </div>
      <div className="flex gap-5 items-center">
        <UploadIcon/>
        <LoveIcon/>
      </div>
    </div>
  );
}

export default HomeHeader;
