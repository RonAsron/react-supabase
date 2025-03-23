import { useEffect, useState } from "react";
import { Table, Button, Modal, Form, Input, notification } from "antd";
import { getData, addData, updateData, deleteData } from "../api/auth";
import { HomeOutlined, InfoCircleOutlined, ShoppingCartOutlined, UserSwitchOutlined, DeleteOutlined ,EditOutlined , PlusCircleOutlined } from "@ant-design/icons";

const collectionName = "shop-it";

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
  item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
  item.unitsnumber.toLowerCase().includes(searchTerm.toLowerCase())
);


  const openModal = (item = null) => {
    setEditingItem(item);
    form.setFieldsValue(item || { number: "", name: "", barcode: "", detail: "", howtouse: "", unitsnumber: "", units: "", price: "" });
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
    { title: "รหัสสินค้า", dataIndex: "number", key: "number" },
    { title: "ชื่อสินค้า", dataIndex: "name", key: "name" },
    { title: "เลขบาร์โค้ด", dataIndex: "barcode", key: "barcode" },
    { title: "รายละเอียดสินค้า", dataIndex: "detail", key: "detail" },
    { title: "วิธีการใช้งาน", dataIndex: "howtouse", key: "howtouse" },
    { title: "จำนวนหน่วย", dataIndex: "unitsnumber", key: "unitsnumber" },
    { title: "หน่วยสินค้า", dataIndex: "units", key: "units" },
    { title: "ราคาต่อหน่วย", dataIndex: "price", key: "price" },
    {
      title: "จัดการ",
      key: "action",
      render: (_, record) => (
        <>
          <Button onClick={() => openModal(record)}  style={{ marginRight: 8 }}><EditOutlined />แก้ไข</Button>
          <Button danger onClick={() => handleDelete(record.id)}><DeleteOutlined />ลบ</Button>
        </>
      ),
    },
  ];

  return (
    <div>
      <h1>🔥{collectionName} รายการสินค้า</h1>
      <Input
        placeholder={`ค้นหา ${collectionName}`}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ width: 300, marginBottom: 16 }}
      />
      <Button type="primary" onClick={() => openModal()} style={{ marginBottom: 16, }}><PlusCircleOutlined /> เพิ่ม {collectionName}</Button>
      <Table columns={columns} dataSource={filteredItems} rowKey="id" loading={loading} />
      <Modal title={editingItem ? "แก้ไขสินค้า" : "เพิ่มสินค้า"} open={isModalVisible} onOk={handleSave} onCancel={() => setIsModalVisible(false)}>
        <Form form={form} layout="vertical">
        
        
          <Form.Item name="number" label="รหัสสินค้า">
            <Input />
          </Form.Item>
          <Form.Item name="name" label="ชื่อสินค้า">
            <Input />
          </Form.Item>
          <Form.Item name="barcode" label="เลขบาร์โค้ด">
            <Input />
          </Form.Item>
          <Form.Item name="detail" label="รายละเอียดสินค้า">
            <Input />
          </Form.Item>
          <Form.Item name="howtouse" label="วิธีการใช้งาน">
            <Input />
          </Form.Item>
          <Form.Item name="unitsnumber" label="จำนวนหน่วย">
            <Input type="number" />
          </Form.Item>
          <Form.Item name="units" label="หน่วยนับสินค้า ">
            <Input />
          </Form.Item>
          <Form.Item name="price" label="ราคาต่อหน่วย">
            <Input type="number" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default DataPage;
