import Navbar from "@/components/ui/Navbar/Navbar";
import { authOptions } from "@/app/lib/AuthOptions";
import { getServerSession } from "next-auth";

const AdminHeader =async () => {
  const session =await getServerSession(authOptions)
  const items = [
    { key: "1", label: "Admins", href: "/admins" },
    { key: "2", label: "My Profile", href: "/admins/my-profile" },
  ];
  return (
    <>
      <Navbar items={items} session={session ? true : false} hasSider />
    </>
  );
};

export default AdminHeader;