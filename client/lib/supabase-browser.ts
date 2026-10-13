import { createClient, type SupabaseClient } from "@supabase/supabase-js";

let supabaseBrowserClient: SupabaseClient | null = null;

export function getSupabaseBrowserClient() {
  if (typeof window === "undefined") {
    throw new Error("The Supabase browser client can only be used in the browser.");
  }

  if (supabaseBrowserClient) return supabaseBrowserClient;

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !anonKey) {
    throw new Error(
      "Supabase is not configured. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.",
    );
  }

  supabaseBrowserClient = createClient(supabaseUrl, anonKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
      detectSessionInUrl: false,
    },
  });

  return supabaseBrowserClient;
}
