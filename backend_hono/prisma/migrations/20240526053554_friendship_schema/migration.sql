-- AlterTable
ALTER TABLE "Blog" ALTER COLUMN "type" DROP DEFAULT;

-- CreateTable
CREATE TABLE "FriendShip" (
    "id" TEXT NOT NULL,
    "senderId" TEXT NOT NULL,
    "receiverId" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FriendShip_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "FriendShip_senderId_receiverId_key" ON "FriendShip"("senderId", "receiverId");

-- AddForeignKey
ALTER TABLE "FriendShip" ADD CONSTRAINT "FriendShip_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FriendShip" ADD CONSTRAINT "FriendShip_receiverId_fkey" FOREIGN KEY ("receiverId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
