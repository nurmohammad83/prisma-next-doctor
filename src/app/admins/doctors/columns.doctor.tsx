"use client";
import Link from 'next/link'
import { EllipsisOutlined } from "@ant-design/icons";
import { Button, Dropdown, MenuProps } from "antd";
import { deleteDoctor } from '@/services/doctors/delete-doctor';

const handelDelete =async(id:string)=>{
 await deleteDoctor(id)
}
const getMenuItems =(id:string): MenuProps['items'] => [
  {
    key: '1',
    label:<Link href={`/admins/doctors/${id}`}>Details</Link>
  },
  {
    key: '2',
    label: <Link href={`/admins/doctors/${id}/update`}>Edit</Link>,
    onClick:()=>{
      console.log('Edit')
    }
  },
  {
    key: '3',
    label: <span>Delete</span>,
    onClick:()=>{
      handelDelete(id)
    }
  },
];

export const columns = [
  {
    title: "Full Name",
    dataIndex: "fullName",
    key: "fullName",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Phone Number",
    dataIndex: "phoneNumber",
    key: "phoneNumber",
  },
  {
    title: "Qualification",
    dataIndex: "qualification",
    key: "qualification",
  },
  {
    title: "Specialization",
    dataIndex: ["specialization", "name"],
    key: "specialization",
  },
  {
    title: "Action",
    key: "action",
    render: (record:any) => {
      const items = getMenuItems(record.id)
      return (
        <Dropdown
        placement="bottomLeft" 
        overlayClassName="min-w-[150px]"
        menu={{
          items:items
        }}
        >
          <Button>
            <EllipsisOutlined />
          </Button>
        </Dropdown>
      );
    },
  },
];
