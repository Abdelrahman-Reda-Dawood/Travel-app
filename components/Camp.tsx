import { PEOPLE_URL } from "@/constants";
import Image from "next/image";

interface CampProps {
  image: string;
  title: string;
  subtitle: string;
  people: string;
}

const CampSite = ({ image, title, subtitle, people }: CampProps) => {
  return (
    <div
      className={`h-full w-full min-w-[1100px] ${image} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}>
      <div className="flex flex-col items-start justify-between h-full p-6 lg:px-20 lg:py-10">
        <div className="gap-4 flexCenter">
          <div className="p-4 rounded-full bg-green-50">
            <Image src={"/folded-map.svg"} alt="map" width={28} height={28} />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="text-white bold-18">{title}</h4>
            <p className="text-white regular-14">{subtitle}</p>
          </div>
        </div>
        {/* People */}
        <div className="gap-6 flexCenter">
          <span className="flex -space-x-4 overflow-hidden">
            {PEOPLE_URL.map((url) => (
              <Image
                src={url}
                key={url}
                alt="person"
                width={52}
                height={52}
                className="inline-block w-10 h-10 rounded-full"
              />
            ))}
          </span>
          <p className="text-white bold-16 md:bold-20">{people}</p>
        </div>
      </div>
    </div>
  );
};
const Camp = () => {
  return (
    <section
      id="camps"
      className="relative flex-col py-10 2xl:max-container flec lg:mb-10 lg:py-20 xl:mb-20">
      <div className="hide-scrollbar flex h-[340px] lg:h-[400px] xl:h-[640px] w-full items-start justify-start gap-8 overflow-x-auto">
        <CampSite
          image="bg-bg-img-1"
          title="Elsaid Elbadwy Camp"
          subtitle="Tanta, Baladna"
          people="50+ joined"
        />
        <CampSite
          image="bg-bg-img-2"
          title="Elsaid Elbadwy Camp"
          subtitle="Tanta, Baladna"
          people="50+ joined"
        />
      </div>

      {/* Extra Info */}
      <div className="px-6 mt-10 flexEnd lg:-mt-60 lg:mr-6">
        <div className="relative w-full p-8 bg-green-50 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 overflow-hidden rounded-3xl">
          <h2 className="text-white capitalize regular-20 md:regular-32 2xl:regular-40">
            Lorem ipsum dolor sit amet consectetur
          </h2>
          <p className="mt-5 text-white regular-16 xl:regular-16">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa
            voluptatem adipisci veniam animi labore omnis numquam laudantium
            aperiam fugit reprehenderit.
          </p>
          <Image
            src={"/quote.svg"}
            alt="camp2"
            width={186}
            height={219}
            className="camp-quote"
          />
        </div>
      </div>
    </section>
  );
};

export default Camp;
