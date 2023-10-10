import { compare } from "bcrypt";
import { MongoClient } from "mongodb";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const url = process.env.MONGODB_URL;

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const client = new MongoClient(url);
        let user = null;
        try {
          const database = client.db(process.env.MONGODB_DATABASE);
          const users = database.collection("users");

          const query = { email: credentials.email };
          user = await users.findOne(query);

          console.log(user);
        } finally {
          await client.close();
        }

        if (!user) {
          return null;
        }

        if (!(await compare(credentials.password, user.password))) {
          console.log(`${credentials.password} != ${user.password}`);
          return null;
        }

        user = {
          name: user.name ?? "",
          email: user.email,
        };

        return user;
      },
    }),
  ],
});

export { handler as GET, handler as POST };
