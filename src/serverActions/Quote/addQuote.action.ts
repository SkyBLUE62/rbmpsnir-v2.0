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
  try {
    const parsedData = schema.parse({
      club: formData.get("club") as string,
      ffvlNumber: formData.get("ffvlNumber") as string,
      email: formData.get("email") as string,
      address: formData.get("address") as string,
      beaconIdType: formData.get("beaconIdType") as string,
    });

    const { ffvlNumber, email, beaconIdType } = parsedData;

    const existingClub = await prisma.club.findFirst({
      where: {
        numFFVL: ffvlNumber,
      },
    });

    if (existingClub) {
      await prisma.quote.create({
        data: {
          typeId: beaconIdType,
          clubId: existingClub.id,
        },
      });

      return { status: "200", message: "Quote added successfully" };
    } else {
      return { status: "404", message: "Club Not Found", path: "" };
    }
  } catch (err) {
    console.error(err);

    if (err instanceof z.ZodError) {
      return {
        status: "400",
        issues: err.issues,
      };
    } else {
      return { status: "500", message: "Internal Server Error" };
    }
  }
};
