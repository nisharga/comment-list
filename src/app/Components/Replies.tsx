import React from "react";
import Likes from "./Likes";
import Info from "./Info";
import { FC } from "react";
import Link from "next/link";

interface IReply {
  id: string;
  img: string;
  name: string;
  time: string;
  comment: string;
  likes: number;
  mention?: string;
}

interface IProps {
  replies: IReply;
}

const Replies: FC<IProps> = ({ replies }) => {
  return ( 
    <div className="max-w-[730px] flex justify-end mx-auto mb-4">
    <div className="after_image_line"></div>
      <div className="bg-white max-w-[650px] ml-5 rounded-md p-6 flex items-center justify-center  ">
        <Likes totalLike={replies?.likes} />
        <div className="ml-6">
          <Info
            imgURL={replies?.img}
            name={replies?.name}
            date={replies?.time}
            user={replies?.mention}
          />
          <p className="pr-4 text-[#81848b] text-sm pt-1">
            { replies?.mention && <Link href={`/${replies?.mention}`} className="text-[#565ab6] font-bold mr-2">{replies?.mention}</Link> }
          {replies?.comment}</p>
        </div>
      </div>
    </div>
  );
};

export default Replies;
