import supabase from "@/supabase";
import useStore from "@/store";

let userId = "";
async function getUserId() {
  if (userId !== "") return userId;

  return new Promise(async resolve => {
    const { data } = await supabase.auth.getUser();
    if (!data) resolve(null);
    userId = data.user.id;
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

  const { data: updateResponse, error: updateError } = await supabase
    .from("users")
    .update({ avatar_url: uploadedFile.publicUrl })
    .eq("id", userId);
};

export const updateUserName = async name => {
  await getUserId();
  if (!userId || typeof name !== "string" || name.length == 0) return;

  const { data, error } = await supabase
    .from("users")
    .update({ name })
    .eq("id", userId);
};

export const updateUserPhone = async phone => {
  await getUserId();

  const { data, error } = await supabase
    .from("users")
    .update({ phone })
    .eq("id", userId);
};

export const updateUserEmail = async email => {
  await getUserId();

  // await supabase.from("users").update({ email }).eq("id", userId);

  const authResponse = await supabase.auth.updateUser({
    email: email,
  });

  console.log(authResponse);
};
