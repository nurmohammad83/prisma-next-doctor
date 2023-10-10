"use server";

import { Doctor } from "@/interfaces/doctor.interfaces";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export const createDoctor = async (data: any) => {
  const doctors = await fetch(
    "http://localhost:4000/api/v1/doctors/create-doctor",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      cache: "no-cache",
    }
  );
  const { data: doctorData } = await doctors.json();
  revalidateTag("all-doctors");
  redirect("/admins/doctors");
};
