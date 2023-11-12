"use client";
import Image from "next/image";

type Props = {
  id: string;
  setOpenModalId: (id: string) => void;
};

export const BtnFormQuote = ({ id, setOpenModalId }: Props) => {
  return (
    <>
      <button
        className="bg-orange-600 font-semibold h-auto w-3/4 py-2 px-2 rounded-2xl flex flex-row items-center justify-center gap-2 hover:transform hover:scale-110"
        onClick={() => setOpenModalId(id)}
      >
        Request a quote
        <Image
          src={`/assets/images/icons/greater-than.svg`}
          alt={"greater than"}
          width={20}
          height={20}
        />
      </button>
    </>
  );
};
