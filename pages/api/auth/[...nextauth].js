import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import dbConnect from "../../../backend/config/db";
import User from "../../../backend/models/usersModel";

export default NextAuth({
  secret: process.env.SECRET,
  session: {
    // jwt: true,
    strategy: "jwt",
  },
  // Configure one or more authentication providers
  providers: [
    Credentials({
      async authorize(credentials) {
        dbConnect();

        const { email, password } = credentials;

        if (!email || !password) {
          throw new Error("Please enter email and password");
        }

        const user = await User.findOne({ email });

        if (!user) {
          throw new Error("Invalid Email or Password");
        }

        const comparePassword = await user.isPasswordMatched(
          password,
          user.password
        );

        if (!comparePassword) {
          throw new Error("Invalid Email or Password");
        }

        return Promise.resolve(user);
      },
    }),
    // ...add more providers here
  ],

  callbacks: {
    jwt: async (token, user) => {
      user && (token.user = user);
      return Promise.resolve(token);
    },
    session: async (session, user) => {
      session.user = user;
      return Promise.resolve(session);
    },
  },
});
