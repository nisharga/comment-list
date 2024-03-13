import Avater from "@/ReusableComponents/Avater"
import Likes from "./Likes" 

import Info from "./Info";

const SingleComment = () => {
  return (
    <div className="bg-white max-w-[730px] h-[140px] rounded-md p-6 mx-auto flex items-center justify-center mb-4">
        <Likes totalLike={10} />
        <div className="ml-6">
            <Info 
                imgURL="https://i.ibb.co/yV6fBfD/Screenshot-6.png"
                name="Nisharga"
                date="2 week ago"
            />
            <p className="pr-4 text-[#81848b] text-sm pt-1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum omnis, eligendi saepe perspiciatis nisi illum totam natus molestias quidem, esse vero, incidunt asperiores. Nostrum quasi delectus ipsa, dolorum eius similique.</p>
        </div>
    </div>
  )
}

export default SingleComment