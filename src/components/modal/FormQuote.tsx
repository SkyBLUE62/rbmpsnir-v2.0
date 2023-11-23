"use client";

import { addQuoteAction } from "@/serverActions/Quote/addQuote.action";
import type { TypeBalise } from "@prisma/client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type FormQuoteProps = {
  beaconDetail: TypeBalise;
  viewModal: boolean | null;
  closeModal: () => void;
};

export const FormQuote = ({
  beaconDetail,
  closeModal,
  viewModal,
}: FormQuoteProps) => {
  return (
    <motion.div
      variants={{
        visible: { opacity: 1, scale: 1, y: "-50%", x: "-50%" },
        hidden: { opacity: 0, scale: 0, y: "-50%", x: "-50%" },
      }}
      initial="hidden"
      animate={viewModal === true ? "visible" : "hidden"}
      exit={"hidden"}
      transition={{ duration: 0.5 }}
      className="fixed  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:w-2/3 xl:w-1/3 lg:h-auto md:h-auto  xl:h-1/2  w-full h-auto sm:w-full sm:h-full px-4 bg-primary rounded-3xl z-70 text-white border-primary border"
    >
      <div className="py-4 flex items-center justify-center bg-secondary rounded-t-3xl sm:flex md:flex  absolute w-full left-0">
        <span className="md:text-3xl font-monument font-semibold text-secondary">
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
      <form
        className="w-full h-full mt-14 px-4 py-4 flex flex-col items-center justify-start gap-6"
        action={async (formAction: FormData) => {
          const status: any = await addQuoteAction(formAction);
          if (status.issues) {
            for (let index = 0; index < status.issues.length; index++) {
              console.log(status.issues[index]);
              const msg =
                status.issues[index].path + " " + status.issues[index].message;
              toast.error(msg, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
            }
          } else if (status?.status === "200") {
            toast.success(status.message, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
            closeModal();
          } else if (status.status === "404" || status.status === "500") {
            toast.error(status.message, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          }
        }}
      >
        <div className="flex sm:flex-row flex-col gap-2 items-center justify-around w-full">
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

        <div className="flex sm:flex-row flex-col gap-2 items-center justify-around w-full">
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

        <div className="flex flex-col md:flex-row px-2 gap-2 md:items-start sm:items-center justify-around w-full">
          <div className="flex flex-col">
            <label
              htmlFor=""
              className="text-center sm:text-center md:text-start"
            >
              Beacon
            </label>
            <textarea
              className="rounded-xl text-secondary px-2 py-1 resize-none focus:border focus:border-orange-600 outline-none"
              placeholder={beaconDetail.name}
              value={beaconDetail.name}
              readOnly
              name="beacon"
            />
          </div>
          <div className="flex-col hidden md:hidden lg:flex">
            <label
              htmlFor=""
              className="text-center sm:text-center md:text-start"
            >
              Product description
            </label>
            <textarea
              className="rounded-xl text-secondary px-2 py-1 resize-none h-28 outline-none focus:border focus:border-orange-600"
              placeholder="Saisissez la description ici"
              value={beaconDetail.description}
              readOnly
              name="description"
            />
          </div>

          <button
            type="submit"
            className="bg-orange-600 md:hidden hidden sm:flex items-center justify-center rounded-3xl py-2 px-4 text-primary font-montserrat font-semibold hover:transform hover:scale-110"
          >
            Request a quote
          </button>
        </div>

        <input type="hidden" name="beaconIdType" value={beaconDetail.id} />
        <button
          type="submit"
          className="bg-orange-600 sm:hidden md:block flex items-center justify-center rounded-3xl py-2 px-4 text-primary font-montserrat font-semibold hover:transform hover:scale-110"
        >
          Request a quote
        </button>
      </form>
    </motion.div>
  );
};
