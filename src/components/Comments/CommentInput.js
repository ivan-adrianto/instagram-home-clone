import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { submitComment } from "../../redux/actionCreators";
import ProfilePhoto from "../common/ProfilePhoto";

function CommentInput() {
  const params = useParams();
  const dispatch = useDispatch();
  const submit = (e) => {
    e.preventDefault();
    dispatch(
      submitComment({
        index: parseInt(params.id) - 1,
        comment: {
          choice: comment,
          name: "ivanadrianto",
          photo: require("../../assets/images/my-profile.jpeg"),
        },
      })
    );
    setComment("")
  };
  const [comment, setComment] = useState("");

  return (
    <div className="fixed lg:relative bg-zinc-100 flex w-full top-11 gap-5 items-center px-4 py-2 max-w-md max-h-[60px] lg:top-0 lg:rounded-br-xl">
      {/* <img
        src={require("../../assets/images/my-profile.jpeg")}
        className="h-8 w-8 rounded-full"
        alt="profile"
      /> */}
      <ProfilePhoto photo={require("../../assets/images/my-profile.jpeg")} noBorder sm />
      <form
        className="relative flex w-full h-11 items-center justify-end"
        onSubmit={submit}
      >
        <input
          type="text"
          placeholder="Add a comment..."
          className="rounded-3xl h-11 px-4 py-3 w-full text-sm absolute top-0 outline-none"
          onChange={(e) => setComment(e.target.value)}
          value={comment}
        />
        <p
          className={`font-bold text-sm z-10 mr-4 ${
            comment ? "text-blue-600" : "text-blue-300"
          }`}
          onClick={submit}
        >
          Post
        </p>
      </form>
    </div>
  );
}

export default CommentInput;
