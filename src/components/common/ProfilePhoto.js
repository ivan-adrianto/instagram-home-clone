import React from "react";

function ProfilePhoto({ photo, noBorder, sm, md }) {
  const borderWidth = () => {
    if (md) {
      return "h-10 w-10";
    } else if (sm && noBorder) {
      return "h-8 w-8";
    } else if (!sm && noBorder) {
      return "h-14 w-14";
    } else if (sm && !noBorder) {
      return "h-9 w-9 new-story-border";
    } else if (!sm && !noBorder) {
      return "h-[60px] w-[60px] new-story-border";
    }
  };

  const photoWidth = () => {
    if (sm) {
      return "h-8 w-8 min-w-[32px]";
    } else if (md) {
      return "h-10 w-10";
    } else {
      return "h-14 w-14";
    }
  };

  return (
    <div className={`rounded-full relative ${borderWidth()}`}>
      <img
        src={photo}
        className={`${photoWidth()} rounded-full absolute ${
          noBorder ? "" : "top-[2px] left-[2px] border-2 "
        }`}
        alt="profile"
      />
    </div>
  );
}

export default ProfilePhoto;
