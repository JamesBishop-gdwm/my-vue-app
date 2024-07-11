// Import necessary functions and types from the @trpc/client package
import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
// Import the type definition for the AppRouter from the trpc module
//this can be named anything for example clientRouter or itemRouter
import type { AppRouter } from "./trpc/router";

// Create a tRPC proxy client for the AppRouter
// This client will be used to make requests to the tRPC server
const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    // Use the httpBatchLink to batch multiple HTTP requests into a single request
    httpBatchLink({
      url: "http://localhost:4000/trpc", // The URL of the tRPC server
    }),
  ],
});

// Export the tRPC client as the default export of this module
export default trpc;
