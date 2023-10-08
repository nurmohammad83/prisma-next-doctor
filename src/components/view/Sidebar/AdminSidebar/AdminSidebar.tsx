import Sidebar from "@/components/ui/Sidebar/Sidebar"
import { ReactNode } from "react";

const AdminSidebar = ({children}:{children:ReactNode}) => {
  const items = [
    { key: "1", label: "Dashboard", href: "/admins/dashboard" },
    { key: "2", label: "Services", href: "/admins/services" },
    { key: "3", label: "Available Services", href: "/admins/available-services" },
    { key: "4", label: "Doctors", href: "/admins/doctors" },
    { key: "5", label: "Available Doctors", href: "/admins/available-doctors" },
    { key: "6", label: "Appointments", href: "/admins/appointments" },
    { key: "7", label: "Specializations", href: "/admins/specialization" },
    { key: "8", label: "Tile Slots", href: "/admins/time-slots" },
  ];
  return <Sidebar items={items}>{children}</Sidebar>
}
export default AdminSidebar