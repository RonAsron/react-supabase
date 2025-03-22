import { supabase } from "./supabaseClient";

// 📌 ดึงข้อมูลจากตารางที่ระบุ (สามารถใช้กับหลายประเภท)
export const getData = async (tableName, filters = {}) => {
  try {
    let query = supabase.from(tableName).select('*'); // Select all columns

    // เพิ่มเงื่อนไขการค้นหาจาก filters
    for (const [key, value] of Object.entries(filters)) {
      query = query.eq(key, value);
    }

    const { data, error } = await query;

    if (error) {
      console.error(`Error fetching data from ${tableName}:`, error.message);
      return [];
    }

    if (!data || data.length === 0) {
      console.warn(`No data found in ${tableName}`, data);
      return [];
    }

    console.log(`Fetched data from ${tableName}:`, data);
    return data;
  } catch (error) {
    console.error(`Error fetching data from ${tableName}:`, error.message);
    return [];
  }
};

// 📌 เพิ่มข้อมูลใหม่
export const addData = async (tableName, data) => {
  try {
    console.log(`Adding new data to ${tableName}:`, data);
    const { data: newData, error } = await supabase.from(tableName).insert([data]);

    if (error) {
      console.error(`Error adding data to ${tableName}:`, error.message);
      throw new Error(error.message);
    }

    console.log(`Added new data to ${tableName}:`, newData);
    return newData;
  } catch (error) {
    console.error(`Error in addData for ${tableName}:`, error.message);
    throw error;
  }
};

// 📌 แก้ไขข้อมูล
export const updateData = async (tableName, id, updatedData) => {
  try {
    console.log(`Updating data in ${tableName} with ID:`, id, "to", updatedData);
    const { data, error } = await supabase.from(tableName).update(updatedData).eq("id", id);

    if (error) {
      console.error(`Error updating data in ${tableName}:`, error.message);
      throw new Error(error.message);
    }

    console.log(`Updated data in ${tableName}:`, data);
    return data;
  } catch (error) {
    console.error(`Error in updateData for ${tableName}:`, error.message);
    throw error;
  }
};

// 📌 ลบข้อมูล
export const deleteData = async (tableName, id) => {
  try {
    console.log(`Deleting data from ${tableName} with ID:`, id);
    const { error } = await supabase.from(tableName).delete().eq("id", id);

    if (error) {
      console.error(`Error deleting data from ${tableName}:`, error.message);
      throw new Error(error.message);
    }

    console.log(`Data deleted from ${tableName} successfully`);
    return { success: true, message: "Data deleted successfully" };
  } catch (error) {
    console.error(`Error in deleteData for ${tableName}:`, error.message);
    throw error;
  }
};
