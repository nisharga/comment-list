"use client";
import { Plus, Minus } from "lucide-react";
import { FC, useState } from "react";

interface IProps { 
  totalLike: number;
}

const Likes: FC<IProps> = ({ totalLike }) => {
  const [likes, setLikes] = useState(totalLike);
  return (
    <div className="bg-[#f5f6fa] p-2.5 flex flex-col rounded-md">
      <button onClick={() => setLikes(likes + 1)}><Plus color="#c6c2e8" size={18} /> </button> 
      <div className="text-[#625fb3] py-3 font-semibold">{likes}</div>
      <button onClick={() => setLikes(likes - 1)}><Minus color="#c6c2e8" size={18} /> </button>
    </div>
  );
};

export default Likes;
