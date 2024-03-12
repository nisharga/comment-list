"use client"
import React, { useState } from "react";
import InputField from "./../ReusableComponents/InputField";
import Avater from "@/ReusableComponents/Avater";

const CommentBox = () => {
  return ( 
    <div className="bg-white max-w-[730px] h-[140px] rounded-md p-6 mx-auto flex items-center justify-center">
      <div className="grid grid-cols-12 gap-5">
      <div className="col-span-2 md:col-span-1">
        <Avater
          src="https://i.ibb.co/ngJ7PX7/Screenshot-10.png"
          className="!min-w-12 !h-12 !rounded-full"
        />
      </div>

      <div className="col-span-7 md:col-span-8">
      <InputField
        className="border border-[#f3f3f3] placeholder:text-[#77787c] px-5 pt-2 pb-12 w-full rounded-sm"
        placeholder="Add a comment..." 
      />
      </div>

       <div className="col-span-2">
       <button className="px-4 md:px-7 py-1.5 md:py-3 bg-[#5358b6] text-[#dce5f8] inline-block rounded-md font-semibold">SEND</button>
       </div>
      </div>
    </div>
  );
};

export default CommentBox;

// transition duration-300 hover:duration-500 hover:scale-105