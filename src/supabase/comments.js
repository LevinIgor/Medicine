import supabase from "@/supabase.js";

export const fetchComments = async object => {
  const { data } = await supabase
    .from("comments")
    .select("*, author: users(name,avatar_url)")
    .eq("object", object)
    .order("created_at", { ascending: false })
    .limit(6);

  return data || [];
};

export const createComment = async comment => {
  const { error } = await supabase.from("comments").insert(comment).single();

  return error === null;
};
