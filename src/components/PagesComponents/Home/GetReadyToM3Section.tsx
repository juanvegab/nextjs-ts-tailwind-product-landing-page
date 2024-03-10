import { FC } from "react";
import Image from "next/image";

import { Button } from "@/components/Button";
import { MaxWidthContainer } from "@/components/MaxWidthContainer";

interface GetReadyToM3SectionProps {}

const GetReadyToM3Section: FC<GetReadyToM3SectionProps> = () => {
  return (
    <div className="bg-secondary text-quinary py-14 pb-14 lg:py-10">
      <MaxWidthContainer>
        <div className="flex flex-col lg:flex-row lg:items-center">
          <div className="mx-5 lg:basis-1/2">
            <Image
              className="object-contain h-[233px] w-[302px] lg:h-[429px] lg:w-[587px]"
              src="/assets/images/other/JaTawn-1270.png"
              width={587}
              height={429}
              alt="Lady drinking wine"
              loading="lazy"
            />
          </div>
          <div className="mx-5 lg:basis-1/2">
            <h2 className="ml-5 mt-5 text-4xl text-primary font-SBlight">
              Ready to get
              <br />
              <span className="-ml-6 text-5xl font-SBBlackItalic lg:text-6xl lg:ml-16">
                M3?
              </span>
            </h2>

            {/* All this absolute and translate y handling was used align properly the decimal markers  */}
            <ol className="mt-10 mb-14 pl-12 text-xl font-SBregular list-decimal marker:font-SBblack marker:text-5xl lg:pl-6 lg:ml-10 lg:relative lg:w-[400px]">
              <li className="mb-12">
                <span className="absolute w-[70%] lg:w-[100%] translate-y-[-40%]">
                  Complete Alloy’s online assessment in 1 minute.
                </span>
              </li>
              <li className="mb-12">
                <span className="absolute w-[70%] lg:w-[100%] translate-y-[-40%]">
                  A doctor reviews your information and writes your
                  prescription.
                </span>
              </li>
              <li className="mb-12">
                <span className="absolute w-[70%] lg:w-[100%] translate-y-[-40%]">
                  Your prescription is shipped right to your door.
                </span>
              </li>
              <li className="mb-12">
                <span className="absolute w-[70%] lg:w-[100%] translate-y-[-40%]">
                  Free and unlimited follow-up with your menopause-trained
                  physician.
                </span>
              </li>
            </ol>
          </div>
        </div>
        <div className="ml-4 lg:ml-0 lg:text-center">
          <Button text="Get your m3" withArrow />
        </div>
      </MaxWidthContainer>
    </div>
  );
};

export { GetReadyToM3Section };
