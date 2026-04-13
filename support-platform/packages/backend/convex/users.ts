import { query } from "./_generated/server";

export const getNotes = query({
    args: {},
    handler: async (ctx) => {
        const notes = await ctx.db
            .query("users")
            .collect();

        return notes;
    },
});