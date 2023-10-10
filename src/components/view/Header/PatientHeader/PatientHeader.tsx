import Navbar from "@/components/ui/Navbar/Navbar";
import { authOptions } from "@/app/lib/AuthOptions";
import { getServerSession } from "next-auth";

const PatientHeader = async () => {
  const session = await getServerSession(authOptions)
    const items = [
        {
          key: '1',
          label: "Home",
          href: "/",
        },
        {
          key: '2',
          label: "Appointment",
          href: "/my-appointment",
        },
        {
          key: '3',
          label: "Contact",
          href: "/contact-us",
        },
      ];
  return (
    <Navbar items={items} session={session ? true : false }/>
  )
}
export default PatientHeader