-- CreateTable
CREATE TABLE "users" (
    "user_id" INTEGER NOT NULL,
    "user_name" TEXT NOT NULL,
    "display_name" TEXT NOT NULL,
    "last_login_date" DATE,

    CONSTRAINT "users_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "notes" (
    "note_id" SERIAL NOT NULL,
    "user_id" INTEGER,
    "text" TEXT NOT NULL,
    "status" TEXT DEFAULT 'in-progress',
    "date" DATE,

    CONSTRAINT "notes_pkey" PRIMARY KEY ("note_id")
);

-- AddForeignKey
ALTER TABLE "notes" ADD CONSTRAINT "notes_user_id_users_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION;
