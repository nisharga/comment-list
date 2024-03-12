import Image from 'next/image';
import { FC } from 'react';

interface IProps {
    className?: string;
    src: string; 
}

const Avater: FC<IProps> = ({ 
    src,
    className, 
}) => {
    return ( 
        <Image
            src={src}
            alt='avater'
            className={`${className} w-11 h-11 rounded-full`}
            width={0}
            height={0}
            unoptimized
        />   
    );
};

export default Avater;