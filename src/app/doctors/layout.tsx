import DoctorHeader from "@/components/view/Header/DoctorHeader/DoctorHeader";
import DoctorSidebar from "@/components/view/Sidebar/DoctorSidebar/DoctorSidebar";
import { ReactNode } from "react";

const DoctorLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <DoctorHeader />
      <DoctorSidebar> {children}</DoctorSidebar>
     
    </div>
  );
};
export default DoctorLayout;
