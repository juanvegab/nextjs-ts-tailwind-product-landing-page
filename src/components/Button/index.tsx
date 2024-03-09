import Image from "next/image";
import { FC } from "react";

enum ButtonTypes {
  PRIMARY = "PRIMARY",
  SECONDARY = "SECONDARY",
}

interface ButtonProps {
  text: string;
  type?: ButtonTypes;
  withArrow?: boolean;
  extraStyles?: string;
}

const Button: FC<ButtonProps> = ({
  text,
  type = ButtonTypes.PRIMARY,
  withArrow = false,
  extraStyles = "",
}) => {
  let coloring = "bg-tertiary text-secondary";

  switch (type) {
    case ButtonTypes.SECONDARY:
      coloring = "bg-secondary text-tertiary";
      break;

    default:
      break;
  }

  return (
    <div
      role="button"
      className={`py-3.5 px-4 leading-none font-semibold inline-flex items-center tracking-widest uppercase ${coloring} ${extraStyles}`}
    >
      {text}
      {withArrow && (
        <Image
          className="ml-3 inline-block object-contain"
          src="/assets/images/arrow-icons/white-arrow-icon.svg"
          alt="Right Arrow"
          width={20}
          height={18}
        />
      )}
    </div>
  );
};

export { Button };
