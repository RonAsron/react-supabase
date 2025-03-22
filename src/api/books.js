import { supabase } from "./supabaseClient";

// 📌 ดึงข้อมูลหนังสือทั้งหมด
export const getBooks = async () => {
  try {
    const { data, error } = await supabase
      .from('books')
      .select('*');  // Select all columns

    if (error) {
      console.error('Error fetching books:', error.message);
      return [];
    }

    if (!data || data.length === 0) {
      console.warn('No books found', data);
      return [];
    }

    console.log('Fetched books:', data);
    return data;
  } catch (error) {
    console.error('Error fetching books:', error.message);
    return [];
  }
};

// 📌 เพิ่มหนังสือใหม่
export const addBook = async (book) => {
  try {
    console.log("Adding new book:", book);
    const { data, error } = await supabase.from("books").insert([book]);

    if (error) {
      console.error("Error adding book:", error.message);
      throw new Error(error.message);
    }

    console.log("Added new book data:", data);
    return data;
  } catch (error) {
    console.error("Error in addBook:", error.message);
    throw error;
  }
};

// 📌 แก้ไขข้อมูลหนังสือ
export const updateBook = async (id, updatedBook) => {
  try {
    console.log("Updating book with ID:", id, "to", updatedBook);
    const { data, error } = await supabase.from("books").update(updatedBook).eq("id", id);

    if (error) {
      console.error("Error updating book:", error.message);
      throw new Error(error.message);
    }

    console.log("Updated book data:", data);
    return data;
  } catch (error) {
    console.error("Error in updateBook:", error.message);
    throw error;
  }
};

// 📌 ลบหนังสือ
export const deleteBook = async (id) => {
  try {
    console.log("Deleting book with ID:", id);
    const { error } = await supabase.from("books").delete().eq("id", id);

    if (error) {
      console.error("Error deleting book:", error.message);
      throw new Error(error.message);
    }

    console.log("Book deleted successfully");
    return { success: true, message: "Book deleted successfully" };
  } catch (error) {
    console.error("Error in deleteBook:", error.message);
    throw error;
  }
};


