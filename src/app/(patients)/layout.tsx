import PatientHeader from "@/components/view/Header/PatientHeader/PatientHeader"
import PatientSidebar from "@/components/view/Sidebar/PatientSidebar/PatientSidebar"
import { ReactNode } from "react"

const PatientLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <PatientHeader />
      <PatientSidebar>{children}</PatientSidebar>
      
    </div>
  )
}
export default PatientLayout