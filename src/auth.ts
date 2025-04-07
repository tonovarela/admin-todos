import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GitHub,
    //No es necesario en la version 14 declarar el clientId y el clientSecret, con agregarlos al .env basta.
    // GitHub({
    //   clientId: process.env.AUTH_GITHUB_ID ?? '',
    //   clientSecret: process.env.AUTH_GITHUB_SECRET ?? '',
    // })
  ],
});