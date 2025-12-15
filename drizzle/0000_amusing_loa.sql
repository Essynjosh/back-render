CREATE TABLE "form_submissions" (
	"id" serial PRIMARY KEY NOT NULL,
	"submitter_name" text NOT NULL,
	"email" text NOT NULL,
	"message" text,
	"submitted_at" timestamp DEFAULT now(),
	CONSTRAINT "form_submissions_email_unique" UNIQUE("email")
);
