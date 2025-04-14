import prisma from "@/lib/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";

import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { signWithEmailPassword } from "./app/auth/actions/action";



export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name:"Credentials",
      credentials: {
        email: { label: "Email", type: "text" ,placeholder:'tonovarela@litoapps.com'},
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        const { email, password } = credentials as any;
        const user =await signWithEmailPassword(email, password);
        if (!user) {
          throw new Error("User not found");
        }        
        return user;
      }
    }),
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,      
    }),
    GitHub,],

  session: {
    strategy: "jwt",
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      //console.log("signIn", { user, account, profile, email, credentials });
      return true;
    },
    async jwt({ token, user, account, profile  }) {
      const dbUser = await prisma.user.findUnique({
        where: {
          email: token.email ??'no-email'
        }
      });
      if (dbUser?.isActive === false) {
        throw new Error("User is not active");        
      }
      token.roles = dbUser?.roles ?? ['no-roles'];      
      token.id = dbUser?.id ?? 'no-uuid';
      return token;
    },
    async session({ session, token, user }) {
      if (session && session.user){ 
         session.user.roles = token.roles;
         session.user.id = token.id;
         
      }
      return session;
    }
  }
});