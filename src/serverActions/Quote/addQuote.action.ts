"use server";
import { z } from "zod";
import prisma from "../../../prisma/db/prisma";

const schema = z.object({
  club: z.string().min(3).max(100),
  ffvlNumber: z.string().min(4).max(100),
  email: z.string().email(),
  address: z.string().min(3).max(100),
  beaconIdType: z.string(),
});

export const addQuoteAction = async (formData: FormData) => {
  console.log("formData", formData);

  try {
    const parsedData = schema.parse({
      club: formData.get("club") as string,
      ffvlNumber: formData.get("ffvlNumber") as string,
      email: formData.get("email") as string,
      address: formData.get("address") as string,
      beaconIdType: formData.get("beaconIdType") as string,
    });

    console.log("parsedData", parsedData);

    const { ffvlNumber, email } = parsedData;
    const beaconIdType = parsedData.beaconIdType;

    const existingClub = await prisma.club.findFirst({
      where: {
        numFFVL: ffvlNumber,
        mail: email,
      },
    });

    if (existingClub) {
      const addQuote = await prisma.quote.create({
        data: {
          typeId: beaconIdType,
          clubId: existingClub.id,
        },
      });
      if (addQuote) {
        return { status: "200", message: "Quote added successfully" };
      }
    } else {
      return { status: "404", message: "Club Not Found" };
    }
  } catch (err) {
    if (err instanceof z.ZodError) {
      console.log(err.issues[0].message);
      return {
        status: "400",
        message: err.issues[0].message,
        path: err.issues[0].path,
      };
    }
  }
};

// export const addQuoteAction = async (formData: FormData) => {
//   "use server";
//   const club = formData.get("club") as string;
//   const ffvlNumber = formData.get("ffvlNumber") as string;
//   const email = formData.get("email") as string;
//   const address = formData.get("address") as string;
//   const beaconIdType = formData.get("beaconIdType") as string;
//   console.log("formData", formData);
//   console.log("beaconIdType", beaconIdType);
//   console.log("address", address);
// };
