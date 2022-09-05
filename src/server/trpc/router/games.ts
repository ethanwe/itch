import { t } from "../trpc";
import { z } from "zod";

export const gamesRouter = t.router({
  getAll: t.procedure.query(({ ctx }) => {
    return ctx.prisma.game
      .findMany({
        include: {
          scores: true,
        },
      })
      .then((teams) => {
        return teams;
      });
  }),
});
