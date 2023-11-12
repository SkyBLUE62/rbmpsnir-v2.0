"use client";
import type { TypeBalise } from "@prisma/client";
import Image from "next/image";

type FormQuoteProps = {
  beaconDetail: TypeBalise;
  closeModal: () => void;
};

export const FormQuote = ({ beaconDetail, closeModal }: FormQuoteProps) => {
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/3 h-1/2 bg-primary rounded-3xl z-70 text-white border-primary border ">
      <div className="py-4 flex items-center justify-center bg-secondary rounded-t-3xl relative">
        <span className="text-3xl font-monument font-semibold text-secondary">
          Quote form
        </span>
        <button className="absolute right-4" onClick={closeModal}>
          <Image
            src={"/assets/images/icons/close.svg"}
            alt={"close.svg"}
            width={24}
            height={24}
          />
        </button>
      </div>
      <div className="w-full h-[1px] bg-white"></div>
      <form className="w-full h-full px-4 py-4 flex flex-col items-center justify-start gap-6">
        <div className="flex flex-row items-center justify-around w-full">
          <div className="flex flex-col">
            <label htmlFor="">Club</label>
            <input
              type="text"
              className="rounded-xl text-secondary px-2 py-1 focus:border focus:border-orange-600 outline-none"
              name="club"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">FFVL Number</label>
            <input
              type="text"
              className="rounded-xl text-secondary px-2 py-1 focus:border focus:border-orange-600 outline-none"
              name="ffvlNumber"
            />
          </div>
        </div>

        <div className="flex flex-row items-center justify-around w-full">
          <div className="flex flex-col">
            <label htmlFor="">Email</label>
            <input
              type="text"
              className="rounded-xl text-secondary px-2 py-1 focus:border focus:border-orange-600 outline-none"
              name="email"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Address</label>
            <input
              type="text"
              className="rounded-xl text-secondary px-2 py-1 focus:border focus:border-orange-600 outline-none"
              name="address"
            />
          </div>
        </div>

        <div className="flex flex-row items-start justify-around w-full">
          <div className="flex flex-col">
            <label htmlFor="">Beacon</label>
            <textarea
              className="rounded-xl text-secondary px-2 py-1 resize-none focus:border focus:border-orange-600 outline-none"
              placeholder={beaconDetail.name}
              value={beaconDetail.name}
              readOnly
              name="beacon"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Description du produit</label>
            <textarea
              className="rounded-xl text-secondary px-2 py-1 resize-none h-28 outline-none focus:border focus:border-orange-600"
              placeholder="Saisissez la description ici"
              value={beaconDetail.description}
              readOnly
              name="description"
            />
          </div>
        </div>
        <input type="hidden" name="beaconId" value={beaconDetail.id} />
        <button
          type="submit"
          className="bg-orange-600 rounded-3xl py-2 px-4 text-primary font-montserrat font-semibold hover:transform hover:scale-110"
        >
          Request a quote
        </button>
      </form>
    </div>
  );
};
