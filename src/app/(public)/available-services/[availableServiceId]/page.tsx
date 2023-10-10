const SingleAvailableServicePublic = async ({
  params: { availableService },
}: {
  params: { availableService: string };
}) => {
  const res = await fetch(
    `http://localhost:4000/api/v1/available-services/${availableService}`,{
      next:{
        tags:['available-services']
      }
    });
  const data = res.json()
  return <div>page</div>;
};
export default SingleAvailableServicePublic;
