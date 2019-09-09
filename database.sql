
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

-- fishing spots table
CREATE TABLE "fishing_spots" (
	"spot_name" varchar(255),
	"latitude" DECIMAL(255) NOT NULL,
	"longitude" DECIMAL(255) NOT NULL,
	"fish_caught" VARCHAR(255) NOT NULL,
	"id" serial NOT NULL,
	"images" varchar(255) NOT NULL,
	"time_of_year" varchar(255) NOT NULL,
	"lure_used" varchar(255) NOT NULL,
	"type_of_fishing" varchar(255) NOT NULL,
	CONSTRAINT "fishing_spots_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);


-- shared data table
CREATE TABLE "users_fishing_spots" (
	"id" serial NOT NULL,
	"user_id" integer NOT NULL,
	"fishing_spot_id" integer NOT NULL,
	CONSTRAINT "users_fishing_spots_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);


ALTER TABLE "users_fishing_spots" ADD CONSTRAINT "users_fishing_spots_fk0" FOREIGN KEY ("user_id") REFERENCES "user"("id");
ALTER TABLE "users_fishing_spots" ADD CONSTRAINT "users_fishing_spots_fk1" FOREIGN KEY ("fishing_spot_id") REFERENCES "fishing_spots"("id");
