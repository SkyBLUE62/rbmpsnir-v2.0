"use server";
import { action } from "@/lib/safe-action";
import { z } from "zod";
import prisma from "../../../prisma/db/prisma";

const schema = z.object({
  club: z.string().min(3).max(10),
  ffvlNumber: z.string().min(8).max(100),
  email: z.string().email(),
  address: z.string().min(3).max(100),
  beaconIdType: z.string(),
});

// export const addQuote = action(schema, async (formData: FormData) => {

//   const club = formData.get("club") as string;
//   const ffvlNumber = formData.get("ffvlNumber") as string;
//   const email = formData.get("email") as string;
//   const address = formData.get("address") as string;
//   const beaconIdType = formData.get("beaconIdType") as string;

//   const existingClub = await prisma.club.findFirst({
//     where: {
//       numFFVL: parseInt(ffvlNumber),
//       mail: email,
//     },
//   });

//   if (existingClub) {
//     const addQuote = await prisma.quote.create({
//       data: {
//         typeId: beaconIdType,
//         clubId: existingClub.id,
//       },
//     });
//     if (addQuote) {
//       return addQuote;
//     }
//   } else {
//     throw new Error("Club not found");
//   }
// });

export const addQuoteAction = async (formData: FormData | any) => {
  "use server";
  console.log("formData", formData);
};
