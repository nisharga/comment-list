import Avater from "@/ReusableComponents/Avater";
import Likes from "./Likes";
import Info from "./Info";
import { FC } from "react";
import { Replies } from ".";

interface IComment {
  id: any;
  img: any;
  name: any;
  time: any;
  comment: any;
  likes: any;
  replies?: {
        id: string;
        img: string;
        name: string;
        time: string;
        comment: string;
        likes: number;
        mention?: string;
    }[] 
}

interface IProps {
  comment: IComment;
}

const SingleComment: FC<IProps> = ({ comment }) => {
  return (
    <>
    <div className="bg-white max-w-[730px] rounded-md p-6 mx-auto flex items-center justify-center mb-4">
      <Likes totalLike={comment?.likes} />
      <div className="ml-6">
        <Info
          imgURL={comment?.img}
          name={comment?.name}
          date={comment?.time}
        />
        <p className="pr-4 text-[#81848b] text-sm pt-1">{comment?.comment}</p>
      </div>
    </div> 
    
      {
        (comment.replies ?? []).map(replies => <Replies key={replies.id} replies={replies} 
           /> )
      } 
    </>
  );
};

export default SingleComment;
