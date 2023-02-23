import React, { useState } from "react";
import { ReactComponent as LoveIcon } from "../../assets/icons/love-icon.svg";
import { ReactComponent as LoveRedIcon } from "../../assets/icons/love-red-icon.svg";
import { ReactComponent as CommentIcon } from "../../assets/icons/comment-icon.svg";
import { ReactComponent as SendIcon } from "../../assets/icons/send-icon.svg";
import { ReactComponent as SaveIcon } from "../../assets/icons/save-icon.svg";
import { ReactComponent as SaveBlackIcon } from "../../assets/icons/save-black-icon.svg";
import { useDispatch } from "react-redux";
import {
  likePost,
  savePost,
  unlikePost,
  unsavePost,
} from "../../redux/actionCreators";
import { useNavigate } from "react-router-dom";
import Spinner from "../common/Spinner";

function Post({ post, index }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const like = () => dispatch(likePost(index));
  const unlike = () => dispatch(unlikePost(index));
  const save = () => dispatch(savePost(index));
  const unsave = () => dispatch(unsavePost(index));

  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div>
      <div className="flex justify-between p-4 items-center">
        <div className="flex gap-2 items-center">
          <div className="h-[42px] w-[42px] new-story-border rounded-full relative">
            <img
              src={post.photo}
              className="h-[38px] w-[38px] rounded-full border-2 absolute top-[2px] left-[2px]"
              alt="profile"
            />
          </div>
          <div>
            <p className="font-bold text-sm">{post.name}</p>
            <p className="text-xs">{post.location}</p>
          </div>
        </div>
      </div>
      {!isLoaded && (
        <div className="w-screen h-[100vw] max-w-[470px] max-h-[470px] flex justify-center items-center">
          <Spinner />
        </div>
      )}
      <img
        src={post.image}
        alt="post"
        className={`border-t w-screen h-[100vw] max-w-[470px] max-h-[470px] ${
          isLoaded ? "block" : "hidden"
        }`}
        onLoad={() => setIsLoaded(true)}
      />
      <div className="px-4">
        <div className="flex justify-between pt-4 items-center mb-3">
          <div className="flex gap-3">
            {post.liked ? (
              <LoveRedIcon onClick={unlike} className="cursor-pointer" />
            ) : (
              <LoveIcon onClick={like} className="cursor-pointer" />
            )}
            <CommentIcon
              onClick={() => navigate(`/comments/${post.id}`)}
              className="cursor-pointer"
            />
            <SendIcon
              onClick={() => navigate("/share")}
              className="cursor-pointer"
            />
          </div>
          {post.saved ? (
            <SaveBlackIcon onClick={unsave} className="cursor-pointer" />
          ) : (
            <SaveIcon onClick={save} className="cursor-pointer" />
          )}
        </div>
        <p className="text-sm font-bold mb-1">{post.likes} likes</p>
        <p className="text-sm">
          <span className="font-bold">{post.name}&nbsp;</span> {post.question}
        </p>
        <p
          className="text-sm text-gray-500 cursor-pointer"
          onClick={() => navigate(`/comments/${post.id}`)}
        >
          View all {post.choices.length} comments
        </p>
        <p className="text-xxs text-gray-500 mt-1">1 day ago</p>
      </div>
    </div>
  );
}

export default Post;
