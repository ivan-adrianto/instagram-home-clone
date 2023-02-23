import React from "react";
import { ReactComponent as LoveIcon } from "../../assets/icons/love-icon.svg";

function Comment({ comment, last }) {
  return (
    <div className={`flex justify-between mb-3 pb-3 ${last ? '' : 'border-b'}`}>
      <div className="flex gap-4">
        <img
          src={comment.photo}
          className="h-8 w-8 rounded-full"
          alt="profile"
        />
        <div>
          <p className="text-sm">
            <span className="font-bold">{comment.name}&nbsp;</span>
            {comment.choice}
          </p>
          <div className="flex text-xs gap-3 mt-2">
            <p>1d</p>
            <p>1 like</p>
          </div>
        </div>
      </div>
      <LoveIcon className="h-3" />
    </div>
  );
}

export default Comment;
