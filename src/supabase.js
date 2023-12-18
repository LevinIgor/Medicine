import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://eutcxspxmeegqptbvfjt.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV1dGN4c3B4bWVlZ3FwdGJ2Zmp0Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwMDQ5OTE0MywiZXhwIjoyMDE2MDc1MTQzfQ.UdRnj7aEP1LsbTstoavvEUtVrGQIUWOQJQ8kSX-Ertc";

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
