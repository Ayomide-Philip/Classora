import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Users from "@/libs/models/user.models";
import bcrypt from "bcrypt";
import { AUTH_SECRET } from "@/libs/config";
import { connectDatabase } from "./libs/connectDatabase";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        await connectDatabase();
        const { email, password } = credentials;
        const user = await Users.findOne({ email });
        if (!user) {
          console.log("User does not exist");
          return null;
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
          console.log("Passwords don't match");
          return null;
        }

        return {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
          username: user.username,
        };
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60,
  },
  secret: AUTH_SECRET,
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.username = user.username;
        token.email = user.email;
        token.name = user.name;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.username = token.username;
        session.user.email = token.email;
        session.user.name = token.name;
        session.user.picture = token.picture;
      }
      return session;
    },
  },
});
