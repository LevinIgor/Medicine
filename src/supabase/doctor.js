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

export const fetchDoctorsForDoctorsPage = async limit => {
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

export const fetchDoctor = async id => {
  const { data } = await supabase
    .from("doctors")
    .select(
      "name,image, specialty, rating, description, id, email, phone, price"
    )
    .eq("id", id)
    .single();

  return data || {};
};

export const fetchDoctorsByName = async name => {
  const { data } = await supabase
    .from("doctors")
    .select("name, specialty, image, rating, id")
    .ilike("name", `%${name}%`);

  return data || [];
};

export const fetchDoctorsBySpecialty = async specialty => {
  const { data } = await supabase
    .from("doctors")
    .select("name, specialty, image, rating, id")
    .eq("specialty", specialty);

  return data || [];
};

export const fetchSpecialty = async () => {
  const { data } = await supabase.from("specialty").select("name");

  return data || [];
};
