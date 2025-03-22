import { useEffect, useState } from "react";
import { Table, Button, Modal, Form, Input, notification } from "antd";
import { getData, addData, updateData, deleteData } from "../api/auth";

// 🔄 ตั้งค่าชื่อ collection ที่ใช้ ดึงข้อมูล
const collectionName = "books"; // เปลี่ยนแค่ตรงนี้ เช่นเป็น "drinks" หรือ "books" ได้เลย

const DataPage = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [form] = Form.useForm();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const data = await getData(collectionName);
      setItems(data);
    } catch (error) {
      notification.error({ message: `Error fetching ${collectionName}`, description: error.message });
    } finally {
      setLoading(false);
    }
  };

  const filteredItems = items.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.author.toLowerCase().includes(searchTerm.toLowerCase())
  );
  

  const openModal = (item = null) => {
    setEditingItem(item);
    form.setFieldsValue(item || { name: "", category: "", price: "", description: "" });
    setIsModalVisible(true);
  };

  const handleSave = async () => {
    try {
      const values = await form.validateFields();
      if (editingItem) {
        await updateData(collectionName, editingItem.id, values);
        notification.success({ message: `อัปเดต ${collectionName} สำเร็จ` });
      } else {
        await addData(collectionName, values);
        notification.success({ message: `เพิ่ม ${collectionName} สำเร็จ` });
      }
      setIsModalVisible(false);
      form.resetFields();
      fetchData();
    } catch (error) {
      notification.error({ message: "ผิดพลาด", description: error.message });
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteData(collectionName, id);
      notification.success({ message: `ลบ ${collectionName} สำเร็จ` });
      fetchData();
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
      <h1>📦 รายการ {collectionName}</h1>
      <Input
        placeholder={`ค้นหา ${collectionName}`}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ width: 300, marginBottom: 16 }}
      />
      <Button type="primary" onClick={() => openModal()} style={{ marginBottom: 16 }}>➕ เพิ่ม {collectionName}</Button>
      <Table columns={columns} dataSource={filteredItems} rowKey="id" loading={loading} />
      <Modal title={editingItem ? "แก้ไขหนังสือ" : "เพิ่มหนังสือ"} open={isModalVisible} onOk={handleSave} onCancel={() => setIsModalVisible(false)}>
        <Form form={form} layout="vertical">
          <Form.Item name="title" label="ชื่อหนังสือ" rules={[{ required: true, message: "กรุณากรอกชื่อหนังสือ" }]}>
            <Input />
          </Form.Item>
          <Form.Item name="author" label="ผู้แต่ง" rules={[{ required: true, message: "กรุณากรอกชื่อผู้แต่ง" }]}>
            <Input />
          </Form.Item>
          <Form.Item name="publisher" label="สำนักพิมพ์">
            <Input />
          </Form.Item>
          <Form.Item name="year" label="ปีที่พิมพ์">
            <Input type="number" />
          </Form.Item>
          <Form.Item name="isbn" label="ISBN">
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default DataPage;
