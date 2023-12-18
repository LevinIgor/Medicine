import supabase from "@/supabase.js";

export const fetchFAQ = async (limit = 4) => {
  const { data, error } = await supabase.from("FAQ").select("*").limit(limit);
  if (error) {
    console.log(error);
    return [];
  }

  return data;
};
