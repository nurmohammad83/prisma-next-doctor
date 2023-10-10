"use server";

import { Doctor } from "@/interfaces/doctor.interfaces";

export const getAllDoctors = async (): Promise<Doctor[]> => {
  const doctors = await fetch("http://localhost:4000/api/v1/doctors", {
    next: {
      tags: ["all-doctors"],
    },
  });
  const { data } = await doctors.json();
  if (doctors.ok && data) {
    return data;
  } else {
    return [];
  }
};
