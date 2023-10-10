import Navbar from "@/components/ui/Navbar/Navbar";
import { authOptions } from "@/app/lib/AuthOptions";
import { getServerSession } from "next-auth";

const DoctorHeader = async () => {
  const session = await getServerSession(authOptions);
  const items = [
    {
      key: "1",
      label: "Home",
      href: "/",
    },
    {
      key: "2",
      label: "About",
      href: "/about-us",
    },
    {
      key: "3",
      label: "Contact",
      href: "/contact-us",
    },
  ];
  return <Navbar items={items} session={session ? true : false} />;
};
export default DoctorHeader;
