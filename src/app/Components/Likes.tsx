import { FC } from "react";

interface IProps {
  totalLike: number;
}

const Likes: FC<IProps> = ({ totalLike }) => {
  return <div>Likes total: {totalLike}</div>;
};

export default Likes;
