import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HomeHeader from "../Homepage/HomeHeader";
import Navbar from "../common/Navbar";
import Post from "../Homepage/Post";
import StorySection from "../Homepage/StorySection";
import { getPostsRequest, setScrollHome } from "../../redux/actionCreators";
import Toast from "../common/Toast";

function HomeContainer() {
  const { posts, scrollHome } = useSelector((state) => state);
  const dispatch = useDispatch();
  const setScroll = () => dispatch(setScrollHome(window.scrollY));

  useEffect(() => {
    if (scrollHome) {
      window.scrollTo({ top: scrollHome });
    }
    document.addEventListener("scroll", setScroll);
    if (posts.length === 0) {
      dispatch(getPostsRequest());
    }
    return () => {
      document.removeEventListener("scroll", setScroll);
    };

    // eslint-disable-next-line
  }, []);

  return (
    <div className="bg-white">
      <HomeHeader />
      <div className="pt-[42px] pb-14">
        <StorySection />
        {posts.map((post, index) => (
          <Post key={index} post={post} index={index} />
        ))}
      </div>
      <Navbar />
      <Toast/>
    </div>
  );
}

export default HomeContainer;
