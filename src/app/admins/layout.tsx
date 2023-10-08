import AdminHeader from "@/components/view/Header/AdminHeader/AdminHeader"
import AdminSidebar from "@/components/view/Sidebar/AdminSidebar/AdminSidebar"
import { ReactNode } from "react"

const AdminLayout = ({children}:{children:ReactNode}) => {
  return (
    <div>
      <AdminHeader />
      <AdminSidebar>{children}</AdminSidebar>
      
      </div>
  )
}
export default AdminLayout