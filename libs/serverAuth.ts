import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";

import prisma from "@/libs/prismadb";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

// getSession -> getServerSession (new version of next)
const serverAuth = async (req: NextApiRequest, res: NextApiResponse) => {
	const session = await getServerSession(req, res, authOptions);

	if (!session?.user?.email) {
		// TODO: this should be more elegant so the server cli is clean
		console.log("Session", session);
		throw new Error("Not signed in (A)");
	}

	const currentUser = await prisma.user.findUnique({
		where: {
			email: session.user.email,
		},
	});

	if (!currentUser) {
		throw new Error("Not signed in (B)");
	}

	return { currentUser };
};

export default serverAuth;
