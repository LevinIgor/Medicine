import supabase from "@/supabase.js";

export const fetchFAQ = async (limit = 99) => {
  const { data } = await supabase.from("FAQ").select("*").limit(limit);
  
  return data || [];
};

export const fetchFAQByQuestion = async question => {
  const { data } = await supabase
    .from("FAQ")
    .select("*")
    .ilike("question", `%${question}%`);

  return data || [];
};
