import React from "react";
import { ReactComponent as MoreIcon } from "../../assets/icons/more-icon.svg";
import { ReactComponent as HomeIcon } from "../../assets/icons/home-icon.svg";
import { ReactComponent as SearchIcon } from "../../assets/icons/search-icon.svg";
import { ReactComponent as CompassIcon } from "../../assets/icons/compass-icon.svg";
import { ReactComponent as ReelsIcon } from "../../assets/icons/reels-icon.svg";
import { ReactComponent as MessageIcon } from "../../assets/icons/message-icon.svg";
import { ReactComponent as LoveIcon } from "../../assets/icons/love-icon.svg";
import { ReactComponent as PlusIcon } from "../../assets/icons/big-plus-icon.svg";
import { ReactComponent as InstagramLogo } from "../../assets/images/logo.svg";
import ProfilePhoto from "./ProfilePhoto";

function Sidebar() {
  const menus = [
    { name: "Home", icon: <HomeIcon /> },
    { name: "Search", icon: <SearchIcon /> },
    { name: "Explore", icon: <CompassIcon /> },
    { name: "Reels", icon: <ReelsIcon /> },
    { name: "Messages", icon: <MessageIcon /> },
    { name: "Notifications", icon: <LoveIcon /> },
    { name: "Create", icon: <PlusIcon /> },
    {
      name: "Profile",
      icon: (
        <ProfilePhoto photo={require("../../assets/images/my-profile.jpeg")} noBorder sm />
      ),
    },
  ];
  return (
    <div className="w-[245px] h-screen border-r lg:flex flex-col justify-between fixed left-0 bg-white p-3 hidden">
      <div>
        <div className="pt-6 pb-4 px-3 mb-5">
          <InstagramLogo />
        </div>
        {menus.map((item) => (
          <div key={item.name} className="flex items-center gap-4 p-3 h-14">
            {item.icon}
            <p className={item.name === "Home" ? "font-bold" : ""}>
              {item.name}
            </p>
          </div>
        ))}
      </div>
      <div className="flex p-3 gap-4">
        <MoreIcon />
        <p>More</p>
      </div>
    </div>
  );
}

export default Sidebar;
