import React, { useEffect, useState } from "react";
import { Table, Button, Input, notification, Form } from "antd";
import { getBooks, addBook, updateBook, deleteBook } from "../api/books";
import { supabase } from "../api/supabaseClient";
import BookModal from "./BookModal"; // นำเข้าคอมโพเนนต์ BookModal

const BooksPage = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingBook, setEditingBook] = useState(null);
  const [searchTerm, setSearchTerm] = useState(""); // สถานะสำหรับคำค้นหา
  const [form] = Form.useForm();

  // 📌 โหลดข้อมูลหนังสือ
  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('books')
        .select('*'); // Fetch all columns
      
      if (error) {
        console.error('Error fetching books:', error.message);
        notification.error({ message: 'Error fetching books', description: error.message });
        return;
      }

      if (data.length === 0) {
        console.log('No books found');
      }
      setBooks(data);
    } catch (error) {
      console.error("Error fetching books:", error.message);
    } finally {
      setLoading(false);
    }
  };

  // 📌 ฟังก์ชันสำหรับการค้นหาหนังสือ
  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.publisher.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.isbn.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // 📌 เปิดฟอร์มเพิ่ม / แก้ไขหนังสือ
  const openModal = (book = null) => {
    setEditingBook(book);
    form.setFieldsValue(book || { title: "", author: "", publisher: "", year: "", isbn: "" });
    setIsModalVisible(true);
  };

  // 📌 บันทึกข้อมูล (เพิ่มหรือแก้ไข)
  const handleSave = async () => {
    try {
      const values = await form.validateFields();
      if (editingBook) {
        await updateBook(editingBook.id, values); // ใช้ updateBook
        notification.success({ message: "อัปเดตสำเร็จ" });
      } else {
        await addBook(values); // ใช้ addBook
        notification.success({ message: "เพิ่มหนังสือสำเร็จ" });
      }
      setIsModalVisible(false);
      form.resetFields(); // รีเซ็ตฟอร์ม
      fetchBooks();
    } catch (error) {
      notification.error({ message: "ผิดพลาด", description: error.message });
    }
  };

  // 📌 ลบหนังสือ
  const handleDelete = async (id) => {
    try {
      await deleteBook(id); // ใช้ deleteBook
      notification.success({ message: "ลบหนังสือสำเร็จ" });
      fetchBooks();
    } catch (error) {
      notification.error({ message: "ผิดพลาด", description: error.message });
    }
  };

  const columns = [
    { title: "ชื่อหนังสือ", dataIndex: "title", key: "title" },
    { title: "ผู้แต่ง", dataIndex: "author", key: "author" },
    { title: "สำนักพิมพ์", dataIndex: "publisher", key: "publisher" },
    { title: "ปีที่พิมพ์", dataIndex: "year", key: "year" },
    { title: "ISBN", dataIndex: "isbn", key: "isbn" },
    {
      title: "จัดการ",
      key: "action",
      render: (_, record) => (
        <>
          <Button onClick={() => openModal(record)} style={{ marginRight: 8 }}>แก้ไข</Button>
          <Button danger onClick={() => handleDelete(record.id)}>ลบ</Button>
        </>
      ),
    },
  ];

  return (
    <div>
      <h1>📚 รายชื่อหนังสือ</h1>
      
      {/* เพิ่มฟังก์ชันค้นหาหนังสือ */}
      <Input
        placeholder="ค้นหาหนังสือ"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ width: 300, marginBottom: 16 }}
      />

      <Button type="primary" onClick={() => openModal()} style={{ marginBottom: 16 }}>➕ เพิ่มหนังสือ</Button>
      
      {/* แสดงตารางหนังสือที่ถูกค้นหาจาก filter */}
      <Table columns={columns} dataSource={filteredBooks} rowKey="id" loading={loading} />

      {/* นำเข้าและใช้ BookModal */}
      <BookModal
        visible={isModalVisible}
        onOk={handleSave}
        onCancel={() => setIsModalVisible(false)}
        form={form}
        editingBook={editingBook}
      />
    </div>
  );
};

export default BooksPage;
