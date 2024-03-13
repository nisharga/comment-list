import Avater from "@/ReusableComponents/Avater";
import { FC } from "react";
import { Undo2 } from "lucide-react";
import Link from "next/link";

interface IProps {
  imgURL: string;
  name: string;
  date: string;
}

const Info: FC<IProps> = ({ imgURL, name, date }) => {
  return (
    <div className="flex justify-between">
      <div className="flex gap-3 items-center">
        <div className="min-h-7 min-w-7 rounded-full">
          <Avater src={imgURL} className="w-full" />
        </div>
        <h4 className="text-[#3d464d] font-semibold">{name}</h4>
        <p className="text-[#979aa0]">{date}</p>
      </div>
      <Link
        href="/"
        className="flex items-center gap-1 text-[#565ab6] font-bold"
      >
        <Undo2 color="#565ab6" size={18} strokeWidth={3} />
        Reply
      </Link>
    </div>
  );
};

export default Info;
