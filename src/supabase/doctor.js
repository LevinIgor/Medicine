import supabase from "@/supabase.js";

export const fetchDoctorsForHomePage = async (limit = 4) => {
  const { data, error } = await supabase
    .from("doctors")
    .select("name, specialty, image, rating")
    .limit(limit);
  if (error) {
    console.log(error);
    return [];
  }

  return data;
};

export const fetchDoctorForDoctorsPage = async limit => {
  const { data, error } = await supabase
    .from("doctors")
    .select("name, specialty, image, rating, id")
    .limit(limit);
  if (error) {
    console.log(error);
    return [];
  }

  return data;
};
