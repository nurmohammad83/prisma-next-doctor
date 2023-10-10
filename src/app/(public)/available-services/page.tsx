import PublicCard from "@/components/view/Public/PublicCard";
import Link from "next/link";

const AvailableServicePage = async () => {

  const res = await fetch("http://localhost:4000/api/v1/available-services",{
    cache:'no-cache'
  });
  const { data } = await res.json();

  return <div>
    {
      data.map((availableService:any)=>{
        return (
         <Link href={`/available-service/${availableService.id}`} key={availableService.id}>
          <PublicCard hoverable title={availableService.service.name}>{availableService.slotDate}</PublicCard>
         </Link>
        )
      })
    }
  </div>;
};
export default AvailableServicePage;
