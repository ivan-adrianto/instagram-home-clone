import React from "react";
import { useSelector } from "react-redux";
import { ReactComponent as LoveIcon } from "../../assets/icons/love-icon.svg";
import ProfilePhoto from "../common/ProfilePhoto";

function Comment({ comment, last, isCaption }) {
  const { modal } = useSelector((state) => state);
  return (
    <div
      className={`flex justify-between mb-3 pb-3 ${
        last || modal === "detail" ? "" : "border-b"
      }`}
    >
      <div className="flex gap-4">
        <ProfilePhoto photo={comment.photo} sm />
        <div>
          <p className="text-sm">
            <span className="font-bold">{comment?.name}&nbsp;</span>
            {comment?.choice}
          </p>
          {!isCaption && (
            <div className="flex text-xs gap-3 mt-2">
              <p>1d</p>
              <p>1 like</p>
            </div>
          )}
        </div>
      </div>
      {!isCaption && <LoveIcon className="h-3" />}
    </div>
  );
}

export default Comment;
