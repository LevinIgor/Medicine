import supabase from "@/supabase.js";

export const fetchServices = async (limit = 30) => {
  const { data } = await supabase
    .from("services")
    .select("name,image")
    .limit(limit);

  return data || [];
};

export const fetchService = async name => {
  const { data } = await supabase
    .from("services")
    .select("name,image, description, prices")
    .eq("name", name)
    .single();

  return data || [];
};

export const fetchServicesByName = async (name, limit = 12) => {
  const { data } = await supabase
    .from("services")
    .select("name,image")
    .ilike("name", `${name}%`)
    .limit(limit);

  return data || [];
};
