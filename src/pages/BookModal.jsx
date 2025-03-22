import React from "react";
import { Modal, Form, Input } from "antd";

const BookModal = ({ visible, onOk, onCancel, form, editingBook }) => {
  return (
    <Modal
      title={editingBook ? "แก้ไขหนังสือ" : "เพิ่มหนังสือ"}
      visible={visible}
      onOk={onOk}
      onCancel={onCancel}
    >
      <Form form={form} layout="vertical">
        <Form.Item
          name="title"
          label="ชื่อหนังสือ"
          rules={[{ required: true, message: "กรุณากรอกชื่อหนังสือ" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="author"
          label="ผู้แต่ง"
          rules={[{ required: true, message: "กรุณากรอกชื่อผู้แต่ง" }]}
        >
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
  );
};

export default BookModal;
