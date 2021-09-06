import React, { useState } from "react";
import { Form, DatePicker, Input, Button, Select, Table, Divider } from "antd";

const CreateProject = () => {
  const [componentSize, setComponentSize] = useState("default");
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  const { TextArea } = Input;
  const columns = [
    {
      title: "No",
      dataIndex: "number",
    },
    {
      title: "Nama",
      dataIndex: "name",
      render: (text) => <a>{text}</a>,
    },
  ];
  const data = [
    {
      key: "1",
      number: "1",
      name: "Patrick",
    },
    {
      key: "2",
      number: "2",
      name: "Spongebob",
    },
    {
      key: "3",
      number: "3",
      name: "Sandy",
    },
    {
      key: "4",
      number: "4",
      name: "Tuan Krabs",
    },
  ];
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, "selectedRows: ", selectedRows);
    },
    getCheckboxProps: (record) => ({
      // Column configuration not to be checked
      name: record.name,
    }),
  };
  const [selectionType] = useState("checkbox");
  return (
    <Form
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
      initialValues={{
        size: componentSize,
      }}
      onValuesChange={onFormLayoutChange}
      size={componentSize}
    >
      <Form.Item label="Kategori Project">
        <Select>
          <Select.Option value="gogreen">Pengembangan Teknologi Go Green</Select.Option>
          <Select.Option value="budaya">Sosial & Kebudayaan</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item label="Nama Project">
        <Input />
      </Form.Item>

      <Form.Item label="Tanggal Mulai">
        <DatePicker />
      </Form.Item>

      <Form.Item label="Link Trello">
        <Input />
      </Form.Item>

      <Form.Item label="Deskripsi Project">
        <TextArea rows={4} />
      </Form.Item>

      <Form.Item label="Undang Member">
        <Divider />
        <div>
          <Table
            dataSource={data}
            columns={columns}
            rowSelection={{
              type: selectionType,
              ...rowSelection,
            }}
          />
        </div>
      </Form.Item>

      <Button type="primary">Submit</Button>
      <span> </span>
      <Button type="primary" danger>
        Cancel
      </Button>
    </Form>
  );
};

export default CreateProject;
