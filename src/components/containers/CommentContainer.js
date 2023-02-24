import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Comment from "../Comments/Comment";
import CommentHeader from "../Comments/CommentHeader";
import CommentInput from "../Comments/CommentInput";
import Navbar from "../common/Navbar";

function CommentContainer() {
  const params = useParams();
  const { posts } = useSelector((state) => state);
  let selectedPost = posts[params.id - 1]; //the id was created as index + 1
  selectedPost.choice = selectedPost.question;

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <div>
      <CommentHeader />
      <Navbar />
      <CommentInput />
      <div className="pt-28 pb-12 px-4">
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
  );
}

export default CommentContainer;
