import { FC } from "react";

interface ChipProps {
  text: string;
}

const Chip: FC<ChipProps> = ({ text }) => {
  return (
    <div>
      <span className="bg-quaternary py-0\.5 px-2 text-primary uppercase font-medium">
        {text}
      </span>
    </div>
  );
};

export { Chip };
