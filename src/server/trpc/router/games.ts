import { t } from "../trpc";
import { z } from "zod";

export const gamesRouter = t.router({
  getAll: t.procedure
    .input(
      z
        .object({
          startDate: z.date().nullish(),
          endDate: z.date().nullish(),
        })
        .nullish()
    )
    .query(({ ctx, input }) => {
      return ctx.prisma.game
        .findMany({
          include: {
            scores: true,
          },
          where: {
            ...(input?.endDate && {
              date: {
                lte: input.endDate,
              },
            }),
            AND: {
              ...(input?.startDate && {
                date: {
                  gte: input.startDate,
                },
              }),
            },
          },
        })
        .then((teams) => {
          return teams;
        });
    }),
});
