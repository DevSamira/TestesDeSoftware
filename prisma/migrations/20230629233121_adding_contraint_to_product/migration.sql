/*
  Warnings:

  - Added the required column `code` to the `product` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_product" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    CONSTRAINT "product_author_fkey" FOREIGN KEY ("author") REFERENCES "user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_product" ("author", "description", "id", "name", "value") SELECT "author", "description", "id", "name", "value" FROM "product";
DROP TABLE "product";
ALTER TABLE "new_product" RENAME TO "product";
CREATE UNIQUE INDEX "product_code_key" ON "product"("code");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
