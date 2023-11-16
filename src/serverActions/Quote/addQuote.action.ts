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
      return { status: "404", message: "Club Not Found", path: "" };
    }
  } catch (err) {
    if (err instanceof z.ZodError) {
      return {
        status: "400",
        issues: err.issues,
      };
    }
  }
};
