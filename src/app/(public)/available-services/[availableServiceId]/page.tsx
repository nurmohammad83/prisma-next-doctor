const SingleAvailableServicePublic = async ({
  params: { availableService },
}: {
  params: { availableService: string };
}) => {
  const res = await fetch(
    `http://localhost:4000/api/v1/available-services/${availableService}`,{
      next:{
        revalidate: 24 * 60 *60,
        tags:['single-available-service']
      }
    });
  const {data} =await res.json()
  return <div>{data.slotDate}</div>;
};
export default SingleAvailableServicePublic;
