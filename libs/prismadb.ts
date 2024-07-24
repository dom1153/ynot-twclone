import { PrismaClient } from "@prisma/client";

declare global {
	var prisma: PrismaClient | undefined;
}

// warn(prisma-client) Already 10 Prisma Clients are actively running.
// A hack to prevent nextjs hotreloading from creating extra prisma clients
const client = globalThis.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalThis.prisma = client;

export default client;
