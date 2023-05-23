-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "gitHubId" INTEGER NOT NULL,
    "fullName" TEXT,
    "login" TEXT NOT NULL,
    "avatar" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_User" ("avatar", "createdAt", "fullName", "gitHubId", "id", "login") SELECT "avatar", "createdAt", "fullName", "gitHubId", "id", "login" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_gitHubId_key" ON "User"("gitHubId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
