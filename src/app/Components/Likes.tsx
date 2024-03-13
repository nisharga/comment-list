import { Plus } from "lucide-react";
import { FC } from "react";

interface IProps {
  totalLike: number;
}

const Likes: FC<IProps> = ({ totalLike }) => {
  return (
    <div>
      <Plus color={`text-[#00ff00]`} size={18} /> {totalLike}
    </div>
  );
};

export default Likes;
