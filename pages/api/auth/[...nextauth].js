import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import dbConnect from "../../../backend/config/db";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Credentials({
      async authorize(credentials) {
        dbConnect();
      },
    }),
    // ...add more providers here
  ],
});
