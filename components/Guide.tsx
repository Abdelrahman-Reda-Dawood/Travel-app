import Image from "next/image";
import React from "react";

const Guide = () => {
  return (
    <section id="guide" className="flex-col flexCenter">
      <div className="w-full pb-12 padding-container max-container">
        <Image src={"/camp.svg"} alt="camp" width={50} height={50} />
        <p className="mb-3 -mt-1 tracking-wider uppercase regular-18 text-green-50">
          we are here for you
        </p>
        <div className="flex flex-wrap items-center justify-between gap-3 lg:gap-8">
          <h2 className="bold-40 lg:bold-60 xl:max-w-[450px]">
            Guide <span className="text-green-500">You</span> to Easy Path
          </h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, fugit
            nihil debitis voluptas maxime tenetur deserunt eum eligendi non
            autem aut, sunt a facilis illo porro veritatis ducimus. Earum, ad!
          </p>
        </div>
      </div>

      <div className="relative w-full flexCenter max-container">
        <Image
          src={"/boat.png"}
          alt="boat"
          width={1440}
          height={580}
          className="object-cover w-full origin-center 2xl:rounded-5xl"
        />

        <div
          className="absolute flex bg-white md:py-8 py-4 pl-5 pr-7 gap-1 
        rounded-3xl border shadow-md md:left-[5%] lg:top-20">
          <Image
            src={"/meter.svg"}
            alt="meter"
            width={16}
            height={158}
            className="w-auto h-full"
          />
          <div className="flex-col flexBetween">
            <div className="flex flex-col w-full">
              <div className="w-full gap-2 flexBetween">
                <p className="regular-16 text-gray-20">Destination</p>
                <p className="bold-16 text-green-50">48 min</p>
              </div>
              <p className="mt-2 bold-20">Kafr Elsheikh</p>
            </div>

            <div className="flex flex-col w-full">
              <p className="regular-16 text-gray-20">Start track</p>
              <h4 className="mt-2 bold-20 whitespace-nowrap">Kafr Elzyat</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
