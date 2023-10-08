import Sidebar from "@/components/ui/Sidebar/Sidebar";
import { ReactNode } from "react";

const DoctorSidebar = ({children}:{children:ReactNode}) => {
    const items = [
        { key: "1", label: "Doctors", href: "/doctors" },
        { key: "2", label: "My Profile", href: "/admins/my-profile" },
      ];
  return <Sidebar items={items}>{children}</Sidebar>
}
export default DoctorSidebar