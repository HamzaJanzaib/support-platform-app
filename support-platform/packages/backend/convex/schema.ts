import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    users: defineTable({
        userId: v.string(),
        title: v.string(),
        content: v.string(),
        summary: v.optional(v.string()),
    }),
});
