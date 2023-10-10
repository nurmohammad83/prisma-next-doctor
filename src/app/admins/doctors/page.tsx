import Table from "@/components/ui/Table/Table"
import AdminTable from "@/components/view/AdminTable/AdminTable"
import { columns } from "./columns.doctor";
import { getAllDoctors } from "@/services/doctors/get-all-doctors";
import { Doctor } from "@/interfaces/doctor.interfaces";

const AllDoctorByAdmin =async () => {
  
  const data:any=await getAllDoctors()
  return (
    <AdminTable title="All Doctors">
      <Table<Doctor> columns={columns} data={data}/>
    </AdminTable>
  )
}
export default AllDoctorByAdmin