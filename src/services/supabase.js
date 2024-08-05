import {createClient} from "@supabase/supabase-js";
const supabaseUrl = "https://prvvlluqruvjufwbtcca.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBydnZsbHVxcnV2anVmd2J0Y2NhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI4NDM0MzMsImV4cCI6MjAzODQxOTQzM30.m70wYNZJQyKbm8a_8-GVDNxho8HAjGjcNSCOdGMMaoI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
