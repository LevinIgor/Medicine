import supabase from "@/supabase";
import useStore from "@/store";

let userId = "";
async function getUserId() {
  if (userId !== "") return userId;

  return new Promise(async resolve => {
    const { data } = await supabase.auth.getUser();

    if (data.user === null) resolve();
    else userId = data.user.id;
    resolve(userId);
  });
}

export const getUserData = async () => {
  await getUserId();
  if (!userId) return;

  const store = useStore();
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("id", userId)
    .single();

  if (error === null) store.setUserData(data);
};

export const uploadAvatarAndUpdate = async file => {
  await getUserId();
  if (!userId) return;

  const path = `${userId}/${crypto.randomUUID()}`;
  const { data } = await supabase.storage.from("Users").upload(path, file);

  const { data: uploadedFile } = await supabase.storage
    .from("Users")
    .getPublicUrl(data.path);

  const { error } = await supabase
    .from("users")
    .update({ avatar_url: uploadedFile.publicUrl })
    .eq("id", userId);

  return uploadedFile.publicUrl || null;
};

export const updateUserName = async name => {
  await getUserId();

  const { data, error } = await supabase
    .from("users")
    .update({ name })
    .eq("id", userId);

  return error == null;
};

export const updateUserPhone = async phone => {
  await getUserId();

  const { data, error } = await supabase
    .from("users")
    .update({ phone })
    .eq("id", userId);

  return error == null;
};

export const updateUserEmail = async email => {
  await getUserId();

  const { error } = await supabase.auth.updateUser({
    email: email,
  });

  return error === null;
};

export const updateUserSex = async sex => {
  await getUserId();
  const { error } = await supabase
    .from("users")
    .update({ sex })
    .eq("id", userId);

  return error === null;
};

export const updateUserDateOfBirth = async dateOfBirth => {
  await getUserId();
  const { error } = await supabase
    .from("users")
    .update({ dateOfBirth })
    .eq("id", userId);

  return error === null;
};

export const updateUserAddress = async address => {
  await getUserId();
  const { error } = await supabase
    .from("users")
    .update({ address })
    .eq("id", userId);

  return error === null;
};

export const updateUserPassword = async password => {
  await getUserId();

  const { error } = await supabase.auth.updateUser({
    password,
  });

  return error === null;
};
