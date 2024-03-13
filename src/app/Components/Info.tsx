import Avater from "@/ReusableComponents/Avater";
import { FC } from "react";
import { Undo2, Trash, Pencil } from "lucide-react";
import Link from "next/link";

interface IProps {
  imgURL: string;
  name: string;
  date: string;
  user?: string;
}

const Info: FC<IProps> = ({ imgURL, name, date, user }) => {
  return (
    <div className="flex justify-between">
      <div className="flex gap-3 items-center">
        <div className="min-h-7 min-w-7 rounded-full">
          <Avater src={imgURL} className="w-full" />
        </div>
        <div className="md:flex gap-3">
          <h4 className="text-[#3d464d] font-semibold">{name}</h4>
          {user === "@ramsesmiran" && (
            <span
              className="bg-[#565ab6] text-white px-2  
          text-sm rounded-sm"
            >
              you
            </span>
          )}
          <p className="text-[#979aa0]">{date}</p>
        </div>
      </div>
      {
        user === "@ramsesmiran" ? <div className="flex gap-4"> 
          <Link href="/delete" className="flex items-center gap-1 text-[#ea6363] font-bold" >
          <Trash color="#ea6363" size={18} strokeWidth={3} />
            Delete
          </Link>
          
          <Link href="/edit" className="flex items-center gap-1 text-[#565ab6] font-bold" >
          <Pencil color="#565ab6" size={18} strokeWidth={3} />
            Edit
          </Link>
        </div> : <Link href="/undo" className="flex items-center gap-1 text-[#565ab6] font-bold" >
        <Undo2 color="#565ab6" size={18} strokeWidth={3} />
        Reply
      </Link>
      }
    </div>
  );
};

export default Info;
