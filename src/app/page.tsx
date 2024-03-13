import CommentBox from "@/Components/CommentBox";
import Avater from "@/ReusableComponents/Avater";
import InputField from "@/ReusableComponents/InputField";

export default function Home() {
  return (
     <div className="bg-[#f5f6fa] h-screen w-screen">
      <div className="container">
        <CommentBox />
      </div>
    </div>
  );
}
