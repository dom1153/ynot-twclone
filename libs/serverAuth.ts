import { NextApiRequest } from "next";
import { getSession } from "next-auth/react";

import prisma from "@/libs/prismadb";

const serverAuth = async (req: NextApiRequest) => {
	const session = await getSession({ req });

	if (!session?.user?.email) {
		// TODO: this should be more elegant so the server cli is clean
		throw new Error("Not signed in");
	}

	const currentUser = await prisma.user.findUnique({
		where: {
			email: session.user.email,
		},
	});

	if (!currentUser) {
		throw new Error("Not signed in");
	}

	return { currentUser };
};

export default serverAuth;
