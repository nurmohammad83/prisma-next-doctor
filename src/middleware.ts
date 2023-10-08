import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const hybridRoutes = ["/", "/login", "/register"];
const patientAccessableRoutes = [
  "/my-profile",
  "/dashboard",
  "/my-appointment",
  "/payment-history",
  "/book-appointment",
];
const roleRedirect: Record<string, unknown> = {
  admin: "http://localhost:3000/admins/dashboard",
  patient: "http://localhost:3000/dashboard",
  doctor: "http://localhost:3000/doctors/dashboard",
};
export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });

  const { pathname } = request.nextUrl;

  if (!token) {
    if (hybridRoutes.includes(pathname)) {
      return NextResponse.next();
    }
    return NextResponse.redirect("http://localhost:3000/login");
  }

  const role = token?.role as string;

  if (
    (role === "admin" && pathname.startsWith("/admins")) ||
    (role === "patient" && patientAccessableRoutes.includes(pathname)) ||
    (role === "doctor" && pathname.startsWith("/doctors"))
  ) {
    return NextResponse.next();
  }

  if (pathname === "/" && role && role in roleRedirect) {
    return NextResponse.redirect(roleRedirect[role] as string);
  }
  return NextResponse.redirect("http://localhost:3000");
}
export const config = {
  matcher: [
    // hybrid routes"
    "/",
    "/login",
    "/register",
    // admins routes
    "/admins/:page*",
    // doctor routes
    "/doctors/:page*",
  ],
};
