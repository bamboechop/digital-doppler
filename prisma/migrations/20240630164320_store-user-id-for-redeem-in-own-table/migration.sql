/*
  Warnings:

  - You are about to drop the column `coworking_channel_redeem_redeemed` on the `users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[user_id]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "coworking_channel_redeem_redeemed";

-- CreateTable
CREATE TABLE "user_redeemed_coworking_redeem" (
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "user_redeemed_coworking_redeem_pkey" PRIMARY KEY ("user_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_redeemed_coworking_redeem_user_id_key" ON "user_redeemed_coworking_redeem"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "users_user_id_key" ON "users"("user_id");
