import prisma from "../../../prisma/db/prisma";
import type { Balise } from "@prisma/client";

const page = async () => {
  const beacons: Balise[] = prisma.balise.findMany({
    where: {
      visible: true,
    },
  });
  
  return beacons && <div></div>;
};

export default page;
