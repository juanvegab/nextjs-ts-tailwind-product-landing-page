import Image from "next/image";
import { FC } from "react";

interface CircularImageProps {
  text?: string;
  src: string;
  alt: string;
  isActive?: boolean;
}

const CircularImage: FC<CircularImageProps> = ({
  text,
  alt,
  src,
  isActive = false,
}) => {
  const activeStyles = isActive ? "font-bold border-tertiary" : "font-medium border-transparent opacity-75";
  return (
    <div className="flex flex-col items-center">
      <Image
        className="block w-full"
        src={src}
        alt={alt}
        width={140}
        height={140}
      />
      {text && <span className={`mt-4 tracking-wide border-b-4 text-center text-[20px] ${activeStyles}`}>{text}</span>}
    </div>
  );
};

export { CircularImage };
