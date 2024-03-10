import { Button } from "@/components/Button";
import { Chip } from "@/components/Chip";
import { MaxWidthContainer } from "@/components/MaxWidthContainer";
import Image from "next/image";
import { FC } from "react";

interface MainHeroProps {}

const MainHero: FC<MainHeroProps> = () => {
  return (
    <div className="bg-primary text-secondary pb-10 font-light">
      <MaxWidthContainer>
        <div className="pt-4 -mb-14 lg:pt-16 lg:-mb-32">
          <div className="flex justify-between items-start">
            <Image
              className="object-contain h-[57px] w-[57px] lg:h-[70px] lg:w-[70px]"
              src="/assets/images/hero/Rx_Icon_2.png"
              alt="RX Icon"
              width={70}
              height={70}
              priority
            />
            <Image
              className="object-contain h-[102px] w-[102px] lg:h-[172px] lg:w-[172px]"
              src="/assets/images/hero/Early_access_badge_1@4x.png"
              alt="Early Access Badge"
              width={172}
              height={172}
              priority
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row">
          <div className="flex justify-center lg:basis-1/3">
            <Image
              className="object-contain h-[231px] w-[60px] lg:h-[509px] lg:w-[132px]"
              src="/assets/images/hero/Asset_4@4x.png"
              alt="RX Icon"
              width={132}
              height={509}
              priority
            />
          </div>
          <div className="lg:basis-2/3">
            <div className="ml-4">
              <Chip text="New!" />
            </div>

            <h1 className="flex text-xl leading-none mt-2">
              <span className="text-[104px] font-SBblack">M3</span>
              <span className="ml-4 leading-normal tracking-widest lg:text-[28px] lg:leading-7 lg:mt-1">
                Miracle
                <br />
                Menopause
                <br />
                Moisturizer
              </span>
            </h1>

            <div className="mx-5 mt-2 text-xl lg:mx-1">
              <p className="text-[22px] font-SBregular lg:max-w-[450px]">
                A restorative & custom-blended estriol face cream to address
                signs of aging.
              </p>
              <p className="mt-6 font-regular">
                <span className="text-[22px] font-SBregular">$149.97</span> for
                a 3-month supply (1.52 oz /45ml)
              </p>
            </div>

            <div className="mx-5 mt-6 lg:mx-1">
              <h2 className="font-SBblack text-tertiary text-2xl">
                How it works
              </h2>
              <ul className="mt-2 pl-12 leading-7 lg:leading-10 lg:text-xl list-image-[url(/assets/images/arrow-icons/orange-arrow-icon.svg)]">
                <li>Increases collagen production</li>
                <li>Retains and restores skin moisture</li>
                <li>Increases skin firmness</li>
                <li>Decreases pore size</li>
                <li>Decreases wrinkle depth</li>
                <li>Increases skin elasticity</li>
              </ul>
            </div>

            <div className="mx-5 mt-4 lg:mx-1 lg:mt-7">
              <Button text="Get it now" withArrow />
            </div>
          </div>
        </div>
        <ul className="mx-5 mt-6 grid grid-cols-1 lg:grid-cols-3 lg:mt-10">
          <li className="mb-4 text-base flex">
            <span className="w-6 h-6 mr-4 absolute flex justify-center items-center">
              <Image
                className="mx-auto"
                src="/assets/images/hero-icons/prescription-icon.svg"
                width={15}
                height={19}
                alt="prescription icon"
              />
            </span>
            <span className="pl-9 lg:text-lg lg:max-w-[260px]">
              Prescription included
            </span>
          </li>
          <li className="mb-4 flex">
            <span className="w-6 h-6 mr-4 absolute flex justify-center items-center">
              <Image
                className="mx-auto"
                src="/assets/images/hero-icons/truck-icon.svg"
                width={24}
                height={19}
                alt="truck icon"
              />
            </span>
            <span className="pl-9 lg:text-lg lg:max-w-[260px]">
              Free shipping, cancel anytime
            </span>
          </li>
          <li className="mb-4 flex">
            <span className="w-6 h-6 mr-4 absolute flex justify-center items-center">
              <Image
                className="mx-auto"
                src="/assets/images/hero-icons/mobile-icon.svg"
                width={12}
                height={20}
                alt="mobile icon"
              />
            </span>
            <span className="pl-9 lg:text-lg lg:max-w-[260px]">
              Unlimited messaging with a menopause-trained doctor
            </span>
          </li>
        </ul>
      </MaxWidthContainer>
    </div>
  );
};

export { MainHero };
