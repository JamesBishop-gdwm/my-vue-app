import express from "express";
import cors from "cors";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { appRouter } from "./trpc/router";
import { createContext } from "./trpc/context";

const app = express(); // Create an instance of an Express application
const PORT = process.env.PORT || 4000; // Define the port number, use environment variable if available, otherwise default to 4000
app.use(cors()); // Enable CORS for all origins
// tRPC middleware
app.use(
  "/trpc", // Define the base path for tRPC routes
  createExpressMiddleware({
    router: appRouter, // Use the imported appRouter for handling tRPC routes
    createContext, // Use the imported createContext function to create context for each request
  })
);
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
