-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Currency" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "isDefault" BOOLEAN NOT NULL DEFAULT false,
    "isBase" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_Currency" ("id", "name") SELECT "id", "name" FROM "Currency";
DROP TABLE "Currency";
ALTER TABLE "new_Currency" RENAME TO "Currency";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
