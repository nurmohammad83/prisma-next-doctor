import Sidebar from "@/components/ui/Sidebar/Sidebar";
import { ReactNode } from "react";

const PatientSidebar = ({children}:{children:ReactNode}) => {
    const items = [
        { key: "1", label: "Dashboard", href: "/dashboard" },
        { key: "2", label: "My Appointment", href: "/my-profile/my-appointment" },
        { key: "3", label: "Available Service", href:"/book-appointment" },
        { key: "4", label: "Available Doctor", href: "/" },
        { key: "5", label: "Payment History", href: "/payment-history" },
       
      ];
  return <Sidebar items={items}>{children}</Sidebar>
}
export default PatientSidebar