"use server";

import { revalidateTag } from "next/cache";

export const deleteDoctor = async (id: string) => {
  const doctors = await fetch(`http://localhost:4000/api/v1/doctors/${id}`, {
    method: "DELETE",
  });
  const { data } = await doctors.json();
  revalidateTag("all-doctors");
};
