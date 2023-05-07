-- CreateTable
CREATE TABLE "Cartoes" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "verication_code" TEXT NOT NULL,
    "expiration_date" TEXT NOT NULL,

    CONSTRAINT "Cartoes_pkey" PRIMARY KEY ("id")
);
