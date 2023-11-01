import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {

for (let index = 0; index < 4; index++) {
    
    const db = await prisma.balise.create({
        data: {
            numBalise: "balise" + index,
            latitude: 0,
            longitude: 0,
            lieu: "lieu" + index,
            typeId: "3748c34a-6a10-4e95-84a9-f8648a4c3b05",
            difficulte: "debutant",
            visible: true,
            idClub: "12d72101-2ffd-4dea-9a84-4eca9ed91cd9",
        }
    })
}

}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })