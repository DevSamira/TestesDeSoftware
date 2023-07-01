-- CreateTable
CREATE TABLE "product" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    CONSTRAINT "product_author_fkey" FOREIGN KEY ("author") REFERENCES "user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
