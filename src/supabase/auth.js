import supabase from "@/supabase";

export const signInWithPassword = async (email, password) => {
  const response = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (response.error) {
    return new Promise(reject => reject(response));
  }

  return new Promise(resolve => resolve(response));
};

export const signUp = async (email, password, name) => {
  const response = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { name },
    },
  });

  return new Promise(resolve => resolve(response));
};

export const resetPassword = async email => {
  supabase.auth.resetPasswordForEmail(email, {
    redirectTo: "http://127.0.0.1:5173/update-password",
  });
};

export const signOut = async () => {
  supabase.auth.signOut();
};

export const updatePassword = async password => {
  const response = await supabase.auth.updateUser({
    password,
  });

  return new Promise(resolve => resolve(response));
};
