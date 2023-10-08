import PublicHeader from "@/components/view/Header/PublicHeader/PublicHeader";
import { authOptions } from "@/lib/AuthOptions";
import { getServerSession } from "next-auth";


export default function Home() {
  const session = getServerSession(authOptions)
  return (
   <PublicHeader />
  )
}
