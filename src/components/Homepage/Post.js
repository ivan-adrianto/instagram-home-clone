import React, { useState } from "react";
import Spinner from "../common/Spinner";
import PostActions from "./PostActions";
import PostHeader from "./PostHeader";

function Post({ post, index }) {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <div className="mb-4">
      <PostHeader post={post} />
      {!isLoaded && (
        <div className="w-screen h-[100vw] max-w-[470px] max-h-[470px] flex justify-center items-center">
          <Spinner />
        </div>
      )}
      <img
        src={post.image}
        alt="post"
        className={`w-screen h-[100vw] max-w-[470px] max-h-[470px] ${
          isLoaded ? "block" : "hidden"
        }`}
        onLoad={() => setIsLoaded(true)}
      />
      <PostActions post={post} index={index} />
    </div>
  );
}

export default Post;
