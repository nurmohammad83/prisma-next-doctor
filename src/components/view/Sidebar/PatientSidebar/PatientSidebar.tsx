import Sidebar from "@/components/ui/Sidebar/Sidebar";
import { ReactNode } from "react";

const PatientSidebar = ({children}:{children:ReactNode}) => {
    const items = [
        { key: "1", label: "My Appointment", href: "/my-appointment" },
        { key: "2", label: "My Profile", href: "/admins/my-profile" },
      ];
  return <Sidebar items={items}>{children}</Sidebar>
}
export default PatientSidebar