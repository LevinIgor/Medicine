import supabase from "@/supabase.js";

export const fetchReservations = async (id, limit = 99) => {
  const { data, error } = await supabase
    .from("reservations")
    .select(
      "id, status, date, time, cabinet, doctor:doctor_id(image,name, specialty)"
    )
    .eq("user_id", id)
    .limit(limit);

  return data || [];
};

export const fetchReservationsByStatus = async (id, status) => {
  const { data, error } = await supabase
    .from("reservations")
    .select(
      "id, status, date, time, cabinet, doctor:doctor_id(image,name, specialty)"
    )
    .eq("user_id", id)
    .eq("status", status);

  return data || [];
};

export const fetchReservation = async id => {
  const { data } = await supabase
    .from("reservations")
    .select("*, doctor:doctor_id(image,name, specialty)")
    .eq("id", id)
    .single();

  return data || {};
};

export const cancelReservation = async id => {
  const { error } = await supabase
    .from("reservations")
    .update({ status: "Canceled" })
    .eq("id", id);

  return error == null;
};

export const insertReservation = async reservation => {
  const response = await supabase
    .from("reservations")
    .insert(reservation)
    .select();
};
