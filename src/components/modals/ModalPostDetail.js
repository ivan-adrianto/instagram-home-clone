import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { setModal } from "../../redux/actionCreators";
import Comment from "../Comments/Comment";
import CommentInput from "../Comments/CommentInput";
import { ReactComponent as CloseIcon } from "../../assets/icons/close-icon.svg";
import PostActions from "../Homepage/PostActions";
import PostHeader from "../Homepage/PostHeader";

function ModalPostDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();

  const { modal, posts } = useSelector((state) => state);
  let selectedPost = posts[id - 1]; //the id was created as index + 1
  selectedPost.choice = selectedPost.question; 

  const ref = useRef(null);

  const onClose = () => {
    navigate("/");
    dispatch(setModal(""));
  };

  const handleClickOutside = (event) => {
    if (event.target.classList.contains("modal-backdrop")) {
      onClose();
    }
  };

  return (
    <div
      className={`h-screen w-screen justify-center items-center ${
        modal !== "detail" && "hidden"
      }`}
      onClick={handleClickOutside}
    >
      <div
        className={`fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full bg-black bg-opacity-30 flex justify-center items-center modal-backdrop`}
      >
        <CloseIcon
          className="absolute top-10 right-10 cursor-pointer invert"
          onClick={onClose}
        />
        <div className="relative w-full max-w-4xl h-auto px-0 pt-0">
          <div
            ref={ref}
            className={`relative bg-white rounded-xl shadow h-[calc(100vh-100px)] w-full ${
              modal === "detail" && "slide-in"
            }`}
          >
            <div className="flex min-w-full h-full">
              <div className="bg-black flex items-center rounded-l-xl">
                <img
                  src={posts[id - 1]?.image}
                  alt=""
                  className="min-w-[470px] object-contain"
                />
              </div>
              <div className="flex flex-col justify-between w-full h-full">
                <div>
                  <PostHeader post={selectedPost} />
                  <div className="p-4 border-t">
                    <Comment comment={selectedPost} isCaption />
                    {selectedPost?.choices?.map((comment, index) => (
                      <Comment
                        comment={comment}
                        key={index}
                        last={index === selectedPost?.choices?.length - 1}
                      />
                    ))}
                  </div>
                </div>
                <div className="border-t">
                  <PostActions post={selectedPost} index={id - 1} />
                  <CommentInput />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalPostDetail;
