import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ReactComponent as LoveIcon } from "../../assets/icons/love-icon.svg";
import { ReactComponent as LoveRedIcon } from "../../assets/icons/love-red-icon.svg";
import { ReactComponent as CommentIcon } from "../../assets/icons/comment-icon.svg";
import { ReactComponent as SendIcon } from "../../assets/icons/send-icon.svg";
import { ReactComponent as SaveIcon } from "../../assets/icons/save-icon.svg";
import { ReactComponent as SaveBlackIcon } from "../../assets/icons/save-black-icon.svg";
import {
  likePost,
  savePost,
  setModal,
  unlikePost,
  unsavePost,
} from "../../redux/actionCreators";

function PostActions({ post, index }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { modal } = useSelector((state) => state);

  const like = () => dispatch(likePost(index));
  const unlike = () => dispatch(unlikePost(index));
  const save = () => dispatch(savePost(index));
  const unsave = () => dispatch(unsavePost(index));

  const onClickShare = () => {
    if (window.screen.width > 768) {
      dispatch(setModal("share"));
    } else {
      navigate("/share");
    }
  };

  const viewComment = () => {
    if (modal === "detail") return;
    if (window.screen.width > 768) {
      navigate(`/detail/${post.id}`);
      dispatch(setModal("detail"));
    } else {
      navigate(`/comments/${post.id}`);
    }
  };

  return (
    <div
      className={`${
        modal !== "detail" ? "px-4 lg:px-0" : "px-4"
      } lg:pb-4 lg:border-b`}
    >
      <div className="flex justify-between pt-4 items-center mb-3">
        <div className="flex gap-3">
          {post.liked ? (
            <LoveRedIcon onClick={unlike} className="cursor-pointer" />
          ) : (
            <LoveIcon onClick={like} className="cursor-pointer" />
          )}
          <CommentIcon
            onClick={viewComment}
            className={modal !== "detail" ? "cursor-pointer" : ""}
          />
          <SendIcon onClick={onClickShare} className="cursor-pointer" />
        </div>
        {post.saved ? (
          <SaveBlackIcon onClick={unsave} className="cursor-pointer" />
        ) : (
          <SaveIcon onClick={save} className="cursor-pointer" />
        )}
      </div>
      <p className="text-sm font-bold mb-1">{post.likes} likes</p>
      {modal !== "detail" && (
        <div>
          <p className="text-sm">
            <span className="font-bold">{post.name}&nbsp;</span> {post.question}
          </p>
          <p
            className="text-sm text-gray-500 cursor-pointer"
            onClick={viewComment}
          >
            View all {post.choices.length} comments
          </p>
        </div>
      )}
      <p className="text-xxs text-gray-500 mt-1">1 day ago</p>
    </div>
  );
}

export default PostActions;
