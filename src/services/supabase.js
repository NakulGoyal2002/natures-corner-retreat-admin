import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://jogepikrohdtulvavgri.supabase.co";
const supabaseKey =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpvZ2VwaWtyb2hkdHVsdmF2Z3JpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM1OTk1ODEsImV4cCI6MjA1OTE3NTU4MX0.8w7EXtOafUQxWP9BGNJEv05JH3D4f3__qOgOZ9JEetI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
