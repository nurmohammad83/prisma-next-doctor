"use server";

export const deleteDoctor = async (id: string) => {
  const doctors = await fetch(`http://localhost:4000/api/v1/doctors/${id}`, {
    method: "DELETE",
    next: {
      tags: ["all-doctors"],
    },
  });
  const { data } = await doctors.json();
  console.log(data);
};
