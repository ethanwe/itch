import { t } from "../trpc";
import { z } from "zod";
import { game, importGames } from "./importGames";

export const exampleRouter = t.router({
  hello: t.procedure
    .input(z.object({ text: z.string().nullish() }).nullish())
    .query(({ input }) => {
      return {
        greeting: `Hello ${input?.text ?? "world"}`,
      };
    }),
  getAll: t.procedure.query(({ ctx }) => {
    return ctx.prisma.team.findMany().then((teams) => {
      return teams.map((t) => t.name).join(", ");
    });
  })
});
