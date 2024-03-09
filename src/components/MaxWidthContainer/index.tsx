import { FC, ReactNode } from "react";

interface MaxWidthContainerProps {
  extraStyles?: string;
  children: ReactNode | Array<ReactNode>;
}

const MaxWidthContainer: FC<MaxWidthContainerProps> = ({
  children,
  extraStyles = "",
}) => {
  return (
    <div
      className={`container mx-auto px-4 sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1440px] ${extraStyles}`}
    >
      {children}
    </div>
  );
};

export { MaxWidthContainer };
