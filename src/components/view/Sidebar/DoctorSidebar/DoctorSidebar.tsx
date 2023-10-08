import Sidebar from "@/components/ui/Sidebar/Sidebar";
import { ReactNode } from "react";

const DoctorSidebar = ({children}:{children:ReactNode}) => {
    const items = [
        { key: "1", label: "Dashboard", href: "/doctors/dashboard" },
        { key: "2", label: "My Availability", href: "/admins/my-availability" },
        { key: "3", label: "My Profile", href: "/admins/my-profile" },
      ];
  return <Sidebar items={items}>{children}</Sidebar>
}
export default DoctorSidebar