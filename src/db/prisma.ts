import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

const db = globalForPrisma.prisma ?? new PrismaClient()

if (import.meta.env.DEV) {
  globalForPrisma.prisma = db
}

export default db
