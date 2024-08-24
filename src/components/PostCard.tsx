import React, { useState } from "react";
import { chat } from "../assets";
import CustomModal from "../utils/CustomModal";
import Login from "./Login";

const PostCard: React.FC = () => {
  const [isRegisterModalVisible,setIsRegisterModalVisible] = useState<boolean>(false);

  const handleCreatePost = ()=>{
    // Todo: Suppose here we check that user is login or not or accessToken expired , if not login we might ask for login
    setIsRegisterModalVisible(true);
  }

  return (
    <>
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
        <button className="bg-blue-600 hover:bg-blue-700 rounded-lg p-2 text-sm font-semibold post-btn"  onClick={handleCreatePost}>Post</button>
      </div>
    </div>
    {isRegisterModalVisible && <CustomModal modalTitle="" size="sm" onDismiss={()=>setIsRegisterModalVisible(false)} isBackDrop={true}>
        <Login/>
      </CustomModal>}
    </>
  );
};

export default PostCard;
