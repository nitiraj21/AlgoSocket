import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient({
  // If using direct connection (not accelerate)
  datasourceUrl: process.env.DATABASE_URL,
});
