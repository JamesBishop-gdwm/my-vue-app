import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient(); // Instantiate a new PrismaClient, which will be used to interact with the database

// Function to create the context object
// This context object will be used in the tRPC middleware to provide the Prisma client to the resolvers
export const createContext = () => ({
  prisma, // Include the Prisma client in the context
});

// Define a TypeScript type for the context object
// This type is derived from the return type of the createContext function
export type Context = ReturnType<typeof createContext>;
