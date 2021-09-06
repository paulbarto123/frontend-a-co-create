import React, { useState } from "react";
import "./enrollment.css";
import { Table, Space } from "antd";
import { ConsoleSqlOutlined, DownOutlined } from "@ant-design/icons";
import { EnrollmentData } from "../../../assets/EnrollmentData";

const columns = [
  {
    title: "No",
    dataIndex: "no",
  },
  {
    title: "Tanggal Registrasi",
    dataIndex: "tanggalRegistrasi",
    typeof: Date,
    sorter: (a, b) => a.tanggalRegistrasi - b.tanggalRegistrasi,
  },
  {
    title: "Nama",
    dataIndex: "nama",
  },
  {
    title: "Status",
    dataIndex: "status",
    filters: [
      {
        text: "Menunggu Approval",
        value: "Menunggu Approval",
      },
      {
        text: "Approved",
        value: "Approved",
      },
    ],
    onFilter: (value, record) => record.status.indexOf(value) === 0,
  },
];

const title = () => {
  return (
    <h1 style={{ fontSize: "36px", fontStyle: "bold" }}>Enrollment Request</h1>
  );
};
const showHeader = true;
const pagination = { position: "bottom" };

const Enrollment = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  var [data, setData] = useState(EnrollmentData);

  const tables = {
    bordered: false,
    loading: false,
    pagination,
    size: "default",
    title: title,
    showHeader,
    rowSelection: {},
    scroll: undefined,
    hasData: true,
    tableLayout: undefined,
    top: "none",
    bottom: "bottomRight",
  };

  const onSelectChange = (selectedRowKeys) => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    setSelectedRowKeys(selectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const tableColumns = columns.map((item) => ({
    ...item,
    ellipsis: tables.ellipsis,
  }));

  const removeBoxFromArray = React.useCallback(
    (value) => {
      const result = data.filter((key, index) => index.key !== value);
      setData(result);
    },
    [data]
  );
  return (
    <>
      <Table
        {...tables}
        pagination={{ position: [tables.top, tables.bottom] }}
        columns={tableColumns}
        dataSource={data}
        rowSelection={rowSelection}
      />
      <div className="approve">
        <button
          type="submit"
          className="approve_button"
          onClick={() => {
            removeBoxFromArray(selectedRowKeys);
          }}
        >
          Approve
        </button>
      </div>
    </>
  );
};

export default Enrollment;
