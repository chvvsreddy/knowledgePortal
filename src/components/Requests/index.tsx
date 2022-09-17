import React from 'react'
import { Table } from 'antd';
import type { ColumnsType, TableProps } from 'antd/lib/table';
import {EyeOutlined} from '@ant-design/icons';

interface DataType {
  key: React.Key;
  RequestID: string;
  ClassType: string;
  Request: string;
  Category: string;
  SubCategory: string;
  Level: string;
  Status: string;
  Options: string;
}
const columns: ColumnsType<DataType> = [
 
  {
    title: 'RequestID',dataIndex: 'RequestID',
    sorter: (a, b) => a.RequestID.length - b.RequestID.length,
  },
  {
    title: 'ClassType', dataIndex: 'ClassType',
    filters: [
      {text: 'Joe', value: 'Joe',  },
      {text: 'Jim', value: 'Jim', },
    ],
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    //onFilter: (value: string, record) => record.name.indexOf(value) === 0,
    sorter: (a, b) => a.ClassType.length - b.ClassType.length,
    sortDirections: ['descend'],
  },
  {
    title: 'Request',dataIndex: 'Request',
  },
  {
    title: 'Category',dataIndex: 'Category',
    filters: [{text: 'London', value: 'London',},{text: 'New York', value: 'New York', }, ],
    //onFilter: (value: string, record) => record.address.indexOf(value) === 0,
  },
  {
    title: 'SubCategory',dataIndex: 'SubCategory',
    filters: [{text: 'London', value: 'London',},{text: 'New York', value: 'New York', }, ],
    //onFilter: (value: string, record) => record.address.indexOf(value) === 0,
  },
  {
    title: 'Level',dataIndex: 'Level',
    filters: [{text: 'Beginer', value: 'Beginer',},{text: 'Advanced', value: 'Advanced', }, ],
    //onFilter: (value: string, record) => record.address.indexOf(value) === 0,
  },
  {
    title: 'Status',dataIndex: 'Status',
    filters: [{text: 'New', value: 'New',},{text: 'Approved', value: 'Approved', }, ],
    //onFilter: (value: string, record) => record.address.indexOf(value) === 0,
  },
  {
    title: 'Options',dataIndex: 'Options',render: () => <a href='/RequestDetails'><EyeOutlined /></a>,
  },
  
];
const data = [
  {
    key: '1',
    RequestID: "REQ00563",
    ClassType:"Online class",
    Request:"React Course",
    Category: "Web Devlopment",
    SubCategory: "React",
    Level: "Beginner",
    Status: "New",
    Options: "",
  },
  {
    key: '2',
    RequestID: "REQ00111",
    ClassType:"Online class",
    Request:"Networking setup",
    Category: "Web Devlopment",
    SubCategory: "Networking",
    Level: "Advanced",
    Status: "Approved",
    Options: "View",
  },
  
];
const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};

function Requests() {
  return (
    <>
    <h3>Your Requests </h3>
      <Table columns={columns} dataSource={data} onChange={onChange} />;
    </>
  )
}

export default Requests