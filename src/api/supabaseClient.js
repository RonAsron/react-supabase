import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://moaqwzutekdnmkrbgbkt.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1vYXF3enV0ZWtkbm1rcmJnYmt0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIzMDQ1NDksImV4cCI6MjA1Nzg4MDU0OX0.o5gj4mZN3Tx7_qvXbu7y2IO0-ljg0BTWA1BiDBEoCKo';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// ทดสอบการเชื่อมต่อ Supabase
const testConnection = async () => {
  try {
    const { data, error } = await supabase.from("books").select("*").limit(1);
    if (error) {
      console.error("Supabase connection error:", error);
    } else {
      console.log("Test connection successful, data:", data);
    }
  } catch (error) {
    console.error("Error during connection test:", error);
  }
};

testConnection(); // ทดสอบการเชื่อมต่อ
