import supabase from "@/supabase";

export const getUserData = async id => {
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("id", id)
    .single();

  if (error === null) return data;
};

export const uploadAvatarAndUpdate = async (file, id) => {
  const path = `${id}/${crypto.randomUUID()}`;
  const { data } = await supabase.storage.from("Users").upload(path, file);

  const { data: uploadedFile } = await supabase.storage
    .from("Users")
    .getPublicUrl(data.path);

  const { error } = await supabase
    .from("users")
    .update({ avatar_url: uploadedFile.publicUrl })
    .eq("id", id);

  return uploadedFile.publicUrl || null;
};

export const updateUserName = async (name, id) => {
  const { error } = await supabase.from("users").update({ name }).eq("id", id);

  return error === null;
};

export const updateUserPhone = async (phone, id) => {
  const { error } = await supabase.from("users").update({ phone }).eq("id", id);

  return error === null;
};

export const updateUserEmail = async email => {
  const { error } = await supabase.auth.updateUser({
    email: email,
  });

  return error === null;
};

export const updateUserSex = async (sex, id) => {
  const { data } = await supabase.from("users").update({ sex }).eq("id", id);

  return data === null;
};

export const updateUserDateOfBirth = async (dateOfBirth, id) => {
  const { data } = await supabase
    .from("users")
    .update({ dateOfBirth })
    .eq("id", id);

  return data === null;
};

export const updateUserAddress = async (address, id) => {
  const { data } = await supabase
    .from("users")
    .update({ address })
    .eq("id", id);

  return data === null;
};

export const updateUserPassword = async password => {
  const { error } = await supabase.auth.updateUser({
    password,
  });

  return error === null;
};
