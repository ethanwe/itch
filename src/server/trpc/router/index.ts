// src/server/router/index.ts
import { t } from "../trpc";

import { exampleRouter } from "./example";
import { gamesRouter } from "./games";

export const appRouter = t.router({
  example: exampleRouter,
  games: gamesRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
