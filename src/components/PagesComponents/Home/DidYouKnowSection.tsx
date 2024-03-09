import { FC } from "react";
import Image from "next/image";

import { Button } from "@/components/Button";
import { MaxWidthContainer } from "@/components/MaxWidthContainer";

interface DidYouKnowSectionProps {}

const DidYouKnowSection: FC<DidYouKnowSectionProps> = () => {
  return (
    <div className="bg-gradient-linear-vertical lg:bg-gradient-linear-horizontal text-primary py-10 pb-14 lg:py-24">
      <MaxWidthContainer>
        <div className="flex flex-col lg:flex-row-reverse lg:items-center">
          <div className="mx-5 text-center lg:basis-1/2">
            <Image
              className="object-contain h-[254] w-[302px] lg:h-[454px] lg:w-[540px]"
              src="/assets/images/other/Humu-1119_1.png"
              width={302}
              height={254}
              alt="Lady applying M3"
              loading="lazy"
            />
          </div>
          <div className="mx-5 text-center lg:basis-1/2">
            <h2 className="mt-8 mb-6 mx-2.5 text-center text-secondary flex flex-col lg:m-0  lg:mb-10">
              <span className="leading-normal text-xl uppercase font-bold lg:text-2xl lg:mb-6">
                Did you know?
              </span>
              <span className="leading-none text-[38px] font-SBBlackItalic font-black lg:text-6xl">
                Up to 30%
              </span>
              <span className="leading-none text-2xl font-SBlight font-thin lg:text-[34px] lg:leading-relaxed">
                of dermal collagen is lost during the
              </span>
              <span className="leading-none text-[38px] text-quaternary font-SBBlackItalic font-black lg:text-6xl">
                first 5 years of menopause
              </span>
              <span className="leading-none text-2xl font-SBlight font-thin lg:text-[34px] lg:leading-tight lg:mt-4 lg:mx-4">
                and decreases by an additional 2.1% every year after
              </span>
            </h2>
            <Button text="Try m3 now" withArrow />
          </div>
        </div>
      </MaxWidthContainer>
    </div>
  );
};

export { DidYouKnowSection };
