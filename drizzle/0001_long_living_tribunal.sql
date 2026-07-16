CREATE TABLE "projects" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"description" text NOT NULL,
	"start_date" date NOT NULL,
	"end_date" date,
	"tags" text[],
	"link" text,
	"repo" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
