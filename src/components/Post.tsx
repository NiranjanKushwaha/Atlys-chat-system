import React, { useState } from "react";
import { IPostData } from "../interfaces/general.interface";
import { chatBubble } from "../assets";

interface PostProps extends IPostData {
  commentsCount: number;
}

const Comment: React.FC<IPostData> = ({ posterName, posterImage, timeAgo, content, comments = [] }) => {
  return (
    <div className="pl-4 border-l-2 border-gray-700 ml-4 mt-4">
      <div className="flex items-center mb-2">
        <img src={posterImage} alt={posterName} className="w-8 h-8 rounded-full mr-2" />
        <div className="text-sm text-gray-400">{posterName}</div>
        <div className="text-xs text-gray-500 ml-2">{timeAgo}</div>
      </div>
      <div className="text-gray-300">{content}</div>
      {/* Render nested comments */}
      {comments.length > 0 && (
        <div className="mt-4">
          {comments.map((comment, index) => (
            <Comment key={index} {...comment} />
          ))}
        </div>
      )}
    </div>
  );
};

const Post: React.FC<PostProps> = ({ posterName, posterImage, timeAgo, content, icon, commentsCount, comments = [], isCommentsVisible }) => {
  const [shouldShowComment, setShouldShowComments] = useState<boolean>(isCommentsVisible || false);

  const handleCommentsVisibility = () => {
    if (comments && comments.length) {
      setShouldShowComments(!shouldShowComment);
    } else {
      setShouldShowComments(false);
    }
  };
  return (
    <div className="post-card p-4 rounded-lg shadow mb-6">
      <div className="flex items-center mb-4">
        <img src={posterImage} alt={posterName} className="w-10 h-10 rounded-full mr-3" />
        <div className="text-lg text-gray-300">{posterName}</div>
        <div className="text-sm text-gray-500 ml-2">{timeAgo}</div>
      </div>
      <div className="flex items-center text-gray-400 mb-4 post-card-inp-container p-3">
        <div>
          <div className="icon-circle-bg">{icon}</div>
        </div>
        <div className="p-2">{content}</div>
      </div>
      <div className=" flex items-center text-gray-500 text-sm mb-4">
        <div className="ml-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-chat-left hover-effect"
            viewBox="0 0 16 16"
            onClick={handleCommentsVisibility}
          >
            <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
          </svg>
        </div>
        <div className="ml-3">{commentsCount} comments</div>
      </div>
      {shouldShowComment && comments.map((comment, index) => <Comment key={index} {...comment} />)}
    </div>
  );
};

export default Post;
