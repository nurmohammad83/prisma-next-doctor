'use client'
import { addToNumber } from "@/utils/addToNumber"
import { Button } from "antd"
import Title from "antd/es/typography/Title"
import { ReactNode } from "react"

const AdminTable = ({children,title}:{children:ReactNode,title:string}) => {
  return (
    <>
    <Button onClick={()=>{
      addToNumber(1,2)
    }}>Add number</Button>
    <Title level={3}>{title}</Title>
    {children}
    </>
  )
}
export default AdminTable