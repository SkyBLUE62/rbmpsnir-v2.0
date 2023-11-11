"use client";
import type { TypeBalise } from "@prisma/client";
type FormQuoteProps = {
  beaconDetail: TypeBalise;
};

export const FormQuote = ({ beaconDetail }: FormQuoteProps) => {
  console.log(beaconDetail);
  return (
    <div className="fixed  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-primary rounded-3xl z-70 text-white">
      <div className="py-4 flex items-center justify-center">
        <span>Formulaire de devis</span>
      </div>
      <form className="w-full h-full px-4 py-4">
        <div className="flex flex-row justify-around items-center gap-8">
          <div className="flex flex-col w-full ">
            <label htmlFor=""></label>
            <input
              type="text"
              placeholder={beaconDetail.name}
              value={beaconDetail.name}
            />
          </div>
          <div className="flex flex-col w-full ">
            <label htmlFor=""></label>
            <input type="text" />
          </div>
        </div>
      </form>
    </div>
  );
};
