import { supabase } from "@/lib/supabase";

export default async function Home() {
  const { data, error } = await supabase
    .from("companies")
    .select("*");

  return (
    <main>
      <h1>Replya</h1>

      {error ? (
        <p>{error.message}</p>
      ) : (
        <p>Database connected successfully 🚀</p>
      )}
    </main>
  );
}