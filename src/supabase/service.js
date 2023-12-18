import supabase from "@/supabase.js";

export const fetchServices = async (limit = 4) => {
  const { data, error } = await supabase
    .from("services")
    .select("name,image")
    .limit(limit);

  
  if (error) {
    console.log(error);
    return [];
  }

  return data;
};
