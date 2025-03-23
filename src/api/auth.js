import { supabase } from "./supabaseClient";

export const getData = async (tableName, filters = {}) => {
  try {
    let query = supabase.from(tableName).select('*');
    for (const [key, value] of Object.entries(filters)) {
      query = query.eq(key, value);
    }

    const { data, error } = await query;

    if (error) {
      console.error(`Error fetching data from ${tableName}:`, error.message);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error(`Error fetching data from ${tableName}:`, error.message);
    return [];
  }
};

export const addData = async (tableName, data) => {
  try {
    const { data: newData, error } = await supabase.from(tableName).insert([data]);
    if (error) throw error;
    return newData;
  } catch (error) {
    throw error;
  }
};

export const updateData = async (tableName, id, updatedData) => {
  try {
    const { data, error } = await supabase.from(tableName).update(updatedData).eq("id", id);
    if (error) throw error;
    return data;
  } catch (error) {
    throw error;
  }
};

export const deleteData = async (tableName, id) => {
  try {
    const { error } = await supabase.from(tableName).delete().eq("id", id);
    if (error) throw error;
    return { success: true, message: "Data deleted successfully" };
  } catch (error) {
    throw error;
  }
};
