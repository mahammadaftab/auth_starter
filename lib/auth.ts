import { db } from "@/db/drizzle";

import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { nextCookies } from "better-auth/next-js";

  
export const auth = betterAuth({
    emailAndPassword: {
    enabled: true, 
    },
    database: drizzleAdapter(db, {
        provider: "pg",
    }),
    plugins: [nextCookies()]
});