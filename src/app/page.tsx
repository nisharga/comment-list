import CommentBox from "@/Components/CommentBox";

export default function Home() {
  return (
     <div className="bg-[#f5f6fa] h-screen w-screen">
      <div className="container">
        <CommentBox />
        <div className="bg-red-500">Hello</div>
      </div>
    </div>
  );
}
