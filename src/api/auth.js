import supabase from "./supabaseClient";

// 📌 เข้าสู่ระบบด้วยอีเมล + รหัสผ่าน
export const signInWithEmail = async (email, password) => {
  const { user, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw error;
  return user;
};

// 📌 ออกจากระบบ
export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
};

// 📌 ดึงข้อมูลผู้ใช้ที่เข้าสู่ระบบ
export const getUser = async () => {
  const { data: { user } } = await supabase.auth.getUser();
  return user;
};
