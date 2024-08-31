import bcrypt from "bcrypt";
import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

import prisma from "@/libs/prismadb";

// auth options is part of newer NextJS
export const authOptions: AuthOptions = {
	adapter: PrismaAdapter(prisma),
	// https://next-auth.js.org/configuration/providers/credentials
	providers: [
		CredentialsProvider({
			name: "credentials",
			credentials: {
				email: { label: "email", type: "text" },
				password: { label: "password", type: "password" },
			},
			async authorize(credentials) {
				const ERR_MSG = "invalid_credentials";

				if (!credentials?.email || !credentials?.password) {
					// TODO instead of throwing errors, do something more elegant...
					throw new Error("invalid_credentials_ep");
				}

				const user = await prisma.user.findUnique({
					where: {
						email: credentials.email,
					},
				});

				if (!user || !user?.hashedPassword) {
					throw new Error("invalid_credentials_p");
				}

				const isCorrectPassword = await bcrypt.compare(
					credentials.password,
					user.hashedPassword,
				);

				if (!isCorrectPassword) {
					throw new Error("invalid_credentials_b");
				}

				return user;
			},
		}),
	],
	debug: process.env.NODE_ENV === "development",
	session: {
		strategy: "jwt",
	},
	jwt: {
		secret: process.env.NEXTAUTH_JWT_SECRET,
	},
	secret: process.env.NEXTAUTH_SECRET,
} as AuthOptions;

export default NextAuth(authOptions);
