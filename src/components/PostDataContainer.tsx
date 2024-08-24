import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";
import Post from "./Post";
import { IPostData } from "../interfaces/general.interface";

export const PostDataContainer = () => {
  const [posts, setPosts] = useState<IPostData[]>([]);

  useEffect(() => {
    fetch("/posts.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("json data is:", data);
        setPosts(data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl text-white font-semibold mb-6">Hello Jane</h1>
        <p className="text-gray-400 mb-6">How are you doing today? Would you like to share something with the community? 😊</p>
        <PostCard />
        <div className="mt-4">
          {posts.map((post, index) => (
            <Post
              key={index}
              posterName={post.posterName}
              posterImage={post.posterImage}
              timeAgo={post.timeAgo}
              content={post.content}
              icon={post.icon}
              commentsCount={post.commentsCount}
              comments={post.comments}
              isCommentsVisible={post?.isCommentsVisible}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
