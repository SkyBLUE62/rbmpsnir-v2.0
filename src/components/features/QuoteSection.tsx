import { TypeBalise } from "@prisma/client";
import Image from "next/image";

type Props = {
  typeBeacons: TypeBalise[];
};

export const QuoteSection = ({ typeBeacons }: Props) => {
  return (
    <div className="h-screen mt-[20vh] flex items-center bg-secondary">
      <div className="max-w-9xl mx-auto h-full flex flex-col gap-16 font-montserrat text-primary items-center justify-center ">
        <span className="flex items-center justify-center text-secondary font-semibold text-5xl font-monument ">
          Our beacons offers
        </span>
        <div className="grid grid-cols-4 gap-16 gap-y-6 h-auto w-full py-10">
          {typeBeacons.map(({ name, image, slug, description }, index) => (
            <div
              key={index}
              className="h-full w-full bg-primary rounded-3xl shadow-black shadow-2xl mb-4 p-4"
            >

              <div className="w-full flex items-center justify-center">
                <Image
                  src={"/assets/images/balises/" + image}
                  alt={"/assets/images/balises/" + image}
                  width={500}
                  height={500}
                  className="rounded-3xl h-[15rem] w-full object-cover object-top"
                />
              </div>
              <div className="flex flex-col items-center h-[15rem] justify-around py-4 gap-4 px-3">
                <div className="w-full flex items-center justify-center text-center text-xl">
                  {name}
                </div>
                <div className="flex items-center justify-center text-center opacity-60 text-base">
                  {description}
                </div>
                <button className="bg-orange-600 h-auto w-3/4 py-2 px-2 rounded-2xl flex flex-row items-center justify-center gap-2">
                  Request a quote
                  <Image
                    src={`/assets/images/icons/greater-than.svg`}
                    alt={"greater than"}
                    width={20}
                    height={20}
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
