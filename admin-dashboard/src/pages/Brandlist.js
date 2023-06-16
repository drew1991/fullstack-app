import React from "react";
import { Table } from "antd";

const columns = [
  {
    title: "Sr. No.",
    dataIndex: "key",
  },
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Product",
    dataIndex: "product",
  },
  {
    title: "Status",
    dataIndex: "status",
  },
];

const data1 = [];
for (let i = 0; i < 46; i++) {
  data1.push({
    key: i,
    name: `Andrew Onyancha ${i}`,
    product: 32,
    status: `Nairobi, kenya ${i}`,
  });
}

const Brandlist = () => {
  return (
    <div>
      <h3 className="mb-4 title">Brands</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default Brandlist;
