import React from "react";
import { chat } from "../assets";

const PostCard: React.FC = () => {
  return (
    <div className="post-card text-white p-4 rounded-lg shadow-lg">
      <div className="text-lg font-semibold mb-2">Create post</div>
      <div className="flex items-center p-3 mb-4 post-card-inp-container rounded-lg">
        <div className="icon-circle-bg">💬</div>
        <input
          type="text"
          className="w-full p-2 bg-transparent focus:outline-none text-white placeholder-gray-400"
          placeholder="How are you feeling today?"
        />
      </div>
      <div className="flex justify-end">
        <button className="bg-blue-600 hover:bg-blue-700 rounded-lg p-2 text-sm font-semibold post-btn">Post</button>
      </div>
    </div>
  );
};

export default PostCard;
