import React from "react";
import { useSelector } from "react-redux";
import ProfilePhoto from "../common/ProfilePhoto";

function PostHeader({ post }) {
  const { modal } = useSelector((state) => state);
  return (
    <div
      className={`flex justify-between items-center ${
        modal === "detail" ? "p-4" : "p-4 lg:px-0"
      }`}
    >
      <div className="flex gap-2 items-center">
        <ProfilePhoto photo={post.photo} sm />
        <div>
          <p className="font-bold text-sm">{post.name}</p>
          <p className="text-xs">{post.location}</p>
        </div>
      </div>
    </div>
  );
}

export default PostHeader;
