CREATE EXTENSION IF NOT EXISTS "pgsodium" WITH SCHEMA "pgsodium";

CREATE EXTENSION IF NOT EXISTS "pg_graphql" WITH SCHEMA "graphql";

CREATE EXTENSION IF NOT EXISTS "pg_stat_statements" WITH SCHEMA "extensions";

CREATE EXTENSION IF NOT EXISTS "pgcrypto" WITH SCHEMA "extensions";

CREATE EXTENSION IF NOT EXISTS "pgjwt" WITH SCHEMA "extensions";

CREATE EXTENSION IF NOT EXISTS "supabase_vault" WITH SCHEMA "vault";

CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA "extensions";

CREATE OR REPLACE FUNCTION "public"."handle_new_user"() RETURNS "trigger"
    LANGUAGE "plpgsql" SECURITY DEFINER
    SET "search_path" TO 'public'
    AS $$
begin
  insert into public.users (id,email,name)
  values (new.id, new.email, new.raw_user_meta_data ->> 'name');
  return new;
end;
$$;

ALTER FUNCTION "public"."handle_new_user"() OWNER TO "postgres";

CREATE OR REPLACE FUNCTION "public"."update_user_email"() RETURNS "trigger"
    LANGUAGE "plpgsql"
    AS $$
BEGIN
  UPDATE public.users
  SET email = NEW.email
  WHERE id = NEW.id;
  RETURN NEW;
END;
$$;

ALTER FUNCTION "public"."update_user_email"() OWNER TO "postgres";

SET default_tablespace = '';

SET default_table_access_method = "heap";

CREATE TABLE IF NOT EXISTS "public"."FAQ" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "question" "text",
    "answer" "text"
);

ALTER TABLE "public"."FAQ" OWNER TO "postgres";

CREATE TABLE IF NOT EXISTS "public"."comments" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "text" "text",
    "author" "uuid",
    "rating" bigint,
    "object" "text"
);

ALTER TABLE "public"."comments" OWNER TO "postgres";

COMMENT ON TABLE "public"."comments" IS 'Comments';

CREATE TABLE IF NOT EXISTS "public"."doctors" (
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "name" "text",
    "specialty" "text",
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "image" "text" DEFAULT 'https://eutcxspxmeegqptbvfjt.supabase.co/storage/v1/object/public/Doctors/doctor1.jpg'::"text" NOT NULL,
    "rating" bigint DEFAULT '1'::bigint NOT NULL,
    "phone" "text" DEFAULT '(380) 95-83-18-689'::"text",
    "email" "text" DEFAULT 'medicine@gmail.com'::"text",
    "price" double precision DEFAULT '60'::double precision,
    "description" "text" DEFAULT 'Dr is a compassionate and highly skilled physician dedicated to delivering personalized healthcare to patients. With a specialization in, Dr. brings a wealth of experience to our medical team. Renowned for their empathetic approach and effective communication, Dr. ensures that patients feel at ease and well-informed throughout their healthcare journey.'::"text"
);

ALTER TABLE "public"."doctors" OWNER TO "postgres";

COMMENT ON TABLE "public"."doctors" IS 'Doctors table';

CREATE TABLE IF NOT EXISTS "public"."notification_type" (
    "name" "text" NOT NULL
);

ALTER TABLE "public"."notification_type" OWNER TO "postgres";

CREATE TABLE IF NOT EXISTS "public"."notifications" (
    "id" bigint NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "user_id" "uuid",
    "type" "text",
    "text" "jsonb"[],
    "reservation_id" "uuid"
);

ALTER TABLE "public"."notifications" OWNER TO "postgres";

ALTER TABLE "public"."notifications" ALTER COLUMN "id" ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME "public"."notifications_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);

CREATE TABLE IF NOT EXISTS "public"."reservation_status" (
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "name" "text" NOT NULL
);

ALTER TABLE "public"."reservation_status" OWNER TO "postgres";

CREATE TABLE IF NOT EXISTS "public"."reservations" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "doctor_id" "uuid",
    "status" "text" DEFAULT 'Planned'::"text",
    "time" time without time zone,
    "cabinet" "text",
    "date" "date",
    "user_id" "uuid",
    "details" "jsonb"[],
    "email" "text",
    "name" "text",
    "specialty" "text" NOT NULL,
    "phone" "text"
);

ALTER TABLE "public"."reservations" OWNER TO "postgres";

CREATE TABLE IF NOT EXISTS "public"."services" (
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "name" "text" DEFAULT ''::"text" NOT NULL,
    "image" "text" DEFAULT 'https://eutcxspxmeegqptbvfjt.supabase.co/storage/v1/object/public/Services/service1.jpg'::"text" NOT NULL,
    "description" "jsonb"[],
    "prices" "jsonb"
);

ALTER TABLE "public"."services" OWNER TO "postgres";

COMMENT ON TABLE "public"."services" IS 'Services';

CREATE TABLE IF NOT EXISTS "public"."specialty" (
    "name" "text" DEFAULT ''::"text" NOT NULL
);

ALTER TABLE "public"."specialty" OWNER TO "postgres";

COMMENT ON TABLE "public"."specialty" IS 'Specialty for Doctors';

CREATE TABLE IF NOT EXISTS "public"."users" (
    "id" "uuid" NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "name" "text" DEFAULT 'Created By Admin'::"text",
    "email" "text" DEFAULT ''::"text" NOT NULL,
    "address" "text" DEFAULT ''::"text" NOT NULL,
    "sex" "text" DEFAULT ''::"text" NOT NULL,
    "dateOfBirth" "date",
    "phone" "text" DEFAULT ''::"text" NOT NULL,
    "avatar_url" "text" DEFAULT 'https://eutcxspxmeegqptbvfjt.supabase.co/storage/v1/object/public/Users/AdobeStock_330142899.jpeg'::"text" NOT NULL,
    CONSTRAINT "users_name_check" CHECK (("length"("name") < 32))
);

ALTER TABLE "public"."users" OWNER TO "postgres";

COMMENT ON TABLE "public"."users" IS 'website users';

ALTER TABLE ONLY "public"."doctors"
    ADD CONSTRAINT "Doctors_pkey" PRIMARY KEY ("id");

ALTER TABLE ONLY "public"."FAQ"
    ADD CONSTRAINT "FAQ_pkey" PRIMARY KEY ("id");

ALTER TABLE ONLY "public"."specialty"
    ADD CONSTRAINT "Specialty_pkey" PRIMARY KEY ("name");

ALTER TABLE ONLY "public"."comments"
    ADD CONSTRAINT "comments_pkey" PRIMARY KEY ("id");

ALTER TABLE ONLY "public"."notification_type"
    ADD CONSTRAINT "notification_type_pkey" PRIMARY KEY ("name");

ALTER TABLE ONLY "public"."notifications"
    ADD CONSTRAINT "notifications_pkey" PRIMARY KEY ("id");

ALTER TABLE ONLY "public"."reservation_status"
    ADD CONSTRAINT "reservation_status_pkey" PRIMARY KEY ("name");

ALTER TABLE ONLY "public"."reservations"
    ADD CONSTRAINT "reservations_pkey" PRIMARY KEY ("id");

ALTER TABLE ONLY "public"."services"
    ADD CONSTRAINT "services_pkey" PRIMARY KEY ("name");

ALTER TABLE ONLY "public"."users"
    ADD CONSTRAINT "users_pkey" PRIMARY KEY ("id");

ALTER TABLE ONLY "public"."comments"
    ADD CONSTRAINT "comments_author_fkey" FOREIGN KEY ("author") REFERENCES "public"."users"("id");

ALTER TABLE ONLY "public"."doctors"
    ADD CONSTRAINT "doctors_specialty_fkey" FOREIGN KEY ("specialty") REFERENCES "public"."specialty"("name");

ALTER TABLE ONLY "public"."notifications"
    ADD CONSTRAINT "notifications_reservation_id_fkey" FOREIGN KEY ("reservation_id") REFERENCES "public"."reservations"("id");

ALTER TABLE ONLY "public"."notifications"
    ADD CONSTRAINT "notifications_type_fkey" FOREIGN KEY ("type") REFERENCES "public"."notification_type"("name");

ALTER TABLE ONLY "public"."notifications"
    ADD CONSTRAINT "notifications_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id");

ALTER TABLE ONLY "public"."reservations"
    ADD CONSTRAINT "reservations_doctor_id_fkey" FOREIGN KEY ("doctor_id") REFERENCES "public"."doctors"("id");

ALTER TABLE ONLY "public"."reservations"
    ADD CONSTRAINT "reservations_specialty_fkey" FOREIGN KEY ("specialty") REFERENCES "public"."specialty"("name");

ALTER TABLE ONLY "public"."reservations"
    ADD CONSTRAINT "reservations_status_fkey" FOREIGN KEY ("status") REFERENCES "public"."reservation_status"("name");

ALTER TABLE ONLY "public"."reservations"
    ADD CONSTRAINT "reservations_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id");

ALTER TABLE ONLY "public"."users"
    ADD CONSTRAINT "users_id_fkey" FOREIGN KEY ("id") REFERENCES "auth"."users"("id");

CREATE POLICY "Enable insert for authenticated users only" ON "public"."comments" FOR INSERT TO "authenticated" WITH CHECK (true);

CREATE POLICY "Enable insert for authenticated users only" ON "public"."reservations" FOR INSERT WITH CHECK (true);

CREATE POLICY "Enable read access for all users" ON "public"."FAQ" FOR SELECT USING (true);

CREATE POLICY "Enable read access for all users" ON "public"."comments" FOR SELECT USING (true);

CREATE POLICY "Enable read access for all users" ON "public"."doctors" FOR SELECT USING (true);

CREATE POLICY "Enable read access for all users" ON "public"."notifications" FOR SELECT USING (true);

CREATE POLICY "Enable read access for all users" ON "public"."reservations" FOR SELECT USING (true);

CREATE POLICY "Enable read access for all users" ON "public"."services" FOR SELECT USING (true);

CREATE POLICY "Enable read access for all users" ON "public"."specialty" FOR SELECT USING (true);

CREATE POLICY "Enable read access for all users" ON "public"."users" FOR SELECT USING (true);

CREATE POLICY "Enable update for users based on email" ON "public"."reservations" FOR UPDATE USING (true) WITH CHECK (true);

CREATE POLICY "Enable update for users based on email" ON "public"."users" FOR UPDATE USING (("auth"."uid"() = "id")) WITH CHECK (("auth"."uid"() = "id"));

ALTER TABLE "public"."FAQ" ENABLE ROW LEVEL SECURITY;

ALTER TABLE "public"."comments" ENABLE ROW LEVEL SECURITY;

ALTER TABLE "public"."doctors" ENABLE ROW LEVEL SECURITY;

ALTER TABLE "public"."notification_type" ENABLE ROW LEVEL SECURITY;

ALTER TABLE "public"."notifications" ENABLE ROW LEVEL SECURITY;

ALTER TABLE "public"."reservation_status" ENABLE ROW LEVEL SECURITY;

ALTER TABLE "public"."reservations" ENABLE ROW LEVEL SECURITY;

ALTER TABLE "public"."services" ENABLE ROW LEVEL SECURITY;

ALTER TABLE "public"."specialty" ENABLE ROW LEVEL SECURITY;

CREATE POLICY "update_user_policy" ON "public"."users" FOR UPDATE USING (("id" = "auth"."uid"())) WITH CHECK (("id" = "auth"."uid"()));

ALTER TABLE "public"."users" ENABLE ROW LEVEL SECURITY;

ALTER PUBLICATION "supabase_realtime" OWNER TO "postgres";

REVOKE USAGE ON SCHEMA "public" FROM PUBLIC;
GRANT USAGE ON SCHEMA "public" TO "postgres";
GRANT USAGE ON SCHEMA "public" TO "anon";
GRANT USAGE ON SCHEMA "public" TO "authenticated";
GRANT USAGE ON SCHEMA "public" TO "service_role";

GRANT ALL ON FUNCTION "public"."handle_new_user"() TO "anon";
GRANT ALL ON FUNCTION "public"."handle_new_user"() TO "authenticated";
GRANT ALL ON FUNCTION "public"."handle_new_user"() TO "service_role";

GRANT ALL ON FUNCTION "public"."update_user_email"() TO "anon";
GRANT ALL ON FUNCTION "public"."update_user_email"() TO "authenticated";
GRANT ALL ON FUNCTION "public"."update_user_email"() TO "service_role";

GRANT ALL ON TABLE "public"."FAQ" TO "anon";
GRANT ALL ON TABLE "public"."FAQ" TO "authenticated";
GRANT ALL ON TABLE "public"."FAQ" TO "service_role";

GRANT ALL ON TABLE "public"."comments" TO "anon";
GRANT ALL ON TABLE "public"."comments" TO "authenticated";
GRANT ALL ON TABLE "public"."comments" TO "service_role";

GRANT ALL ON TABLE "public"."doctors" TO "anon";
GRANT ALL ON TABLE "public"."doctors" TO "authenticated";
GRANT ALL ON TABLE "public"."doctors" TO "service_role";

GRANT ALL ON TABLE "public"."notification_type" TO "anon";
GRANT ALL ON TABLE "public"."notification_type" TO "authenticated";
GRANT ALL ON TABLE "public"."notification_type" TO "service_role";

GRANT ALL ON TABLE "public"."notifications" TO "anon";
GRANT ALL ON TABLE "public"."notifications" TO "authenticated";
GRANT ALL ON TABLE "public"."notifications" TO "service_role";

GRANT ALL ON SEQUENCE "public"."notifications_id_seq" TO "anon";
GRANT ALL ON SEQUENCE "public"."notifications_id_seq" TO "authenticated";
GRANT ALL ON SEQUENCE "public"."notifications_id_seq" TO "service_role";

GRANT ALL ON TABLE "public"."reservation_status" TO "anon";
GRANT ALL ON TABLE "public"."reservation_status" TO "authenticated";
GRANT ALL ON TABLE "public"."reservation_status" TO "service_role";

GRANT ALL ON TABLE "public"."reservations" TO "anon";
GRANT SELECT,INSERT,REFERENCES,DELETE,TRIGGER,TRUNCATE ON TABLE "public"."reservations" TO "authenticated";
GRANT ALL ON TABLE "public"."reservations" TO "service_role";

GRANT UPDATE("status") ON TABLE "public"."reservations" TO "authenticated";

GRANT ALL ON TABLE "public"."services" TO "anon";
GRANT ALL ON TABLE "public"."services" TO "authenticated";
GRANT ALL ON TABLE "public"."services" TO "service_role";

GRANT ALL ON TABLE "public"."specialty" TO "anon";
GRANT ALL ON TABLE "public"."specialty" TO "authenticated";
GRANT ALL ON TABLE "public"."specialty" TO "service_role";

GRANT ALL ON TABLE "public"."users" TO "anon";
GRANT ALL ON TABLE "public"."users" TO "authenticated";
GRANT ALL ON TABLE "public"."users" TO "service_role";

ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "service_role";

ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "service_role";

ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "service_role";

RESET ALL;