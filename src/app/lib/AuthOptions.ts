import { jwtHelpers } from "@/helpers/jwtHelpers";
import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      id: "doctor-portal-backend",
      name: "Credentials",
      type: "credentials",
      credentials: {
        username: {
          label: "Email",
          type: "email",
          placeholder: "Enter Your Email",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        try {
          const res = await fetch("http://localhost:4000/api/v1/auth/login", {
            method: "POST",
            body: JSON.stringify(credentials),
            headers: {
              "Content-Type": "application/json",
            },
          });
          const { data } = await res.json();
          console.log(data);
          const verifyToken: any = jwtHelpers.verifyToken(
            data?.accessToken,
            process.env.JWT_SECRET!
          );

          if (res.ok && data) {
            return {
              ...data,
              ...verifyToken,
            };
          }
        } catch (error: any) {
          console.log(error);
          throw new Error(error.message);
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return {
        ...token,
        ...user,
      };
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60,
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
    error: "/",
  },
};
