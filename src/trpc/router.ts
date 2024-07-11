// src/trpc.ts
import { initTRPC } from "@trpc/server";
import { z } from "zod";
import type { Context } from "./context";

const t = initTRPC.context<Context>().create();

export const appRouter = t.router({
  getUser: t.procedure.input(z.number()).query(async ({ input, ctx }) => {
    const user = await ctx.prisma.user.findUnique({
      where: { id: input },
    });
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  }),
  getUsers: t.procedure.query(async ({ ctx }) => {
    return await ctx.prisma.user.findMany();
  }),
});

export type AppRouter = typeof appRouter;
