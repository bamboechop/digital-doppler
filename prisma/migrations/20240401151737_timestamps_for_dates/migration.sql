-- AlterTable
ALTER TABLE "notes" ALTER COLUMN "date" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "date" SET DATA TYPE TIMESTAMP(3);

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "last_login_date" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "last_login_date" SET DATA TYPE TIMESTAMP(3);