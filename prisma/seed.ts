import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";
import { randomUUID } from "crypto";
const prisma = new PrismaClient();
interface Coordonnees {
  [key: string]: {
    latitude: number;
    longitude: number;
  };
}

// async function generateClubs() {
//   for (let index = 0; index < 3; index++) {
//     const club = await prisma.club.create({
//       data: {
//         name: faker.company.name(),
//         adresse: faker.address.streetAddress(),
//         mail: faker.internet.email(),
//         numFFVL: faker.number.int({ min: 10000, max: 99999 }).toString(),
//       },
//     });

//     console.log(`Club created: ${club.name}`);
//   }
// }

const lieuToSlug = (lieu: string) => {
  return lieu.toLowerCase().replace(/\s+/g, "-");
};

async function generateClubsAndBalises() {
  const clubs = await prisma.club.findMany();
  const types = await prisma.typeBalise.findMany();
  const lieu = [
    "Annecy",
    "Dune du Pillat",
    "Millau",
    "Saint-Hilaire",
    "Normandie",
    "Chamonix Mont-Blanc",
    "Puy de Dôme",
    "Les Vosges",
    "Ménez Hom",
    "Tegelberg",
    "Babadag",
    "Interlaken",
    "Queenstown",
    "Oludeniz",
    "Pokhara",
    "Cape Town",
    "Bir Billing",
    "Rio de Janeiro",
    "San Gil",
    "Point of the Mountain",
    "Lookout Mountain",
    "Cape Kiwanda",
    "Torrey Pines",
    "Inspiration Point",
    "Chicopee Woods",
    "Billing",
    "Gunung Banyak",
    "Phuket",
    "Yunfeng",
    "Sivota",
  ];

  const coordonnees: Coordonnees = {
    Annecy: { latitude: 45.8992, longitude: 6.1294 },
    "Dune du Pillat": { latitude: 44.6241, longitude: -1.2155 },
    Millau: { latitude: 44.091, longitude: 3.0806 },
    "Saint-Hilaire": { latitude: 45.2892, longitude: 5.8811 },
    Normandie: { latitude: 49.3452, longitude: -0.9136 },
    "Chamonix Mont-Blanc": { latitude: 45.9237, longitude: 6.8694 },
    "Puy de Dôme": { latitude: 45.7716, longitude: 2.9647 },
    "Les Vosges": { latitude: 48.0418, longitude: 7.0065 },
    "Ménez Hom": { latitude: 48.2429, longitude: -4.1975 },
    Tegelberg: { latitude: 47.5772, longitude: 10.9781 },
    Babadag: { latitude: 36.2746, longitude: 29.4115 },
    Interlaken: { latitude: 46.6866, longitude: 7.8691 },
    Queenstown: { latitude: -45.0312, longitude: 168.6626 },
    Oludeniz: { latitude: 36.552, longitude: 29.115 },
    Pokhara: { latitude: 28.2096, longitude: 83.9856 },
    "Cape Town": { latitude: -33.9249, longitude: 18.4241 },
    "Bir Billing": { latitude: 32.042, longitude: 76.7077 },
    "Rio de Janeiro": { latitude: -22.9068, longitude: -43.1729 },
    "San Gil": { latitude: 6.5532, longitude: -73.136 },
    "Point of the Mountain": { latitude: 40.5247, longitude: -112.1224 },
    "Lookout Mountain": { latitude: 35.021, longitude: -85.3616 },
    "Cape Kiwanda": { latitude: 45.2166, longitude: -123.972 },
    "Torrey Pines": { latitude: 32.8998, longitude: -117.2446 },
    "Inspiration Point": { latitude: 34.1118, longitude: -118.5357 },
    "Chicopee Woods": { latitude: 34.2291, longitude: -83.8087 },
    Billing: { latitude: 31.912, longitude: 77.315 },
    "Gunung Banyak": { latitude: 2.892, longitude: 98.3363 },
    Phuket: { latitude: 7.8804, longitude: 98.3923 },
    Yunfeng: { latitude: 30.425, longitude: 103.824 },
    Sivota: { latitude: 39.4026, longitude: 20.2433 },
  };

  for (let index = 0; index < lieu.length; index++) {
    const randomClub = clubs[Math.floor(Math.random() * clubs.length)];
    const randomType = types[Math.floor(Math.random() * types.length)];
    const slug = lieuToSlug(lieu[index]);
    const balise = await prisma.balise.create({
      data: {
        numBalise: faker.random.alphaNumeric(8),
        latitude: coordonnees[lieu[index]].latitude,
        longitude: coordonnees[lieu[index]].longitude,
        lieu: lieu[index],
        typeId: randomType.id,
        slug: slug,
        difficulte: faker.helpers.arrayElement([
          "beginner",
          "intermediate",
          "expert",
        ]),
        visible: true,
        idClub: randomClub.id,
      },
    });

    console.log(`Balise created for Club ${randomClub.name}: ${balise.lieu}`);
  }
}


// const generateIdType = async () => {
//   for (let index = 0; index < 4; index++) {
//     const type = await prisma.typeBalise.create({
//       data: {
//         id: randomUUID(),
//         name: "LED Professional Weather Station Solar Wireless 7-1 Sensors WIFI 433Mhz LoRa RADDY",
//         description:
//           "LED Professional Weather Station Solar Wireless 7-1 Sensors WIFI 433Mhz LoRa RADDY",
//         slug: "led-professional-weather-station-solar-wireless-7-1-sensors-wifi-433mhz-lora-raddy",
//         image: "assets/images/balises/balise4.jpg",
//       },
//     });
//     console.log(`Type created: ${type.name}`);
//   }
// };

// generateIdType()
// generateClubs()
generateClubsAndBalises()

  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
