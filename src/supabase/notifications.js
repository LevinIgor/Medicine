import supabase from "@/supabase.js";

export const fetchNotifications = async (id, limit = 99) => {
  const { data, error } = await supabase
    .from("notifications")
    .select("*")
    .limit(limit);
  
  return data || [];
};
