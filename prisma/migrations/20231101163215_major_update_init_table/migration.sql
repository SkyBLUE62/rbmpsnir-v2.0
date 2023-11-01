/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_authorId_fkey";

-- DropTable
DROP TABLE "Post";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Balise" (
    "id" TEXT NOT NULL,
    "numBalise" TEXT NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "lieu" TEXT NOT NULL,
    "visible" BOOLEAN NOT NULL DEFAULT false,
    "difficulte" TEXT NOT NULL,
    "idClub" TEXT NOT NULL,
    "typeId" TEXT NOT NULL,

    CONSTRAINT "Balise_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TypeBalise" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "TypeBalise_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Club" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "adresse" TEXT NOT NULL,
    "mail" TEXT NOT NULL,
    "numFFVL" INTEGER NOT NULL,

    CONSTRAINT "Club_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Quote" (
    "id" TEXT NOT NULL,
    "status" INTEGER NOT NULL DEFAULT 1,
    "dateOrder" TIMESTAMP(3) NOT NULL,
    "typeId" TEXT NOT NULL,

    CONSTRAINT "Quote_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Balise" ADD CONSTRAINT "Balise_idClub_fkey" FOREIGN KEY ("idClub") REFERENCES "Club"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Balise" ADD CONSTRAINT "Balise_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "TypeBalise"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Quote" ADD CONSTRAINT "Quote_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "TypeBalise"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
