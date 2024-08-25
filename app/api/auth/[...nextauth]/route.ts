import { authConfig } from "@/app/lib/auth";
import NextAuth from "next-auth"

const handler = NextAuth(authConfig)

export { handler as GET, handler as POST }

console.log({
    clientId: process.env.GOOGLE_CLIENT_ID ?? "9 not found",
    clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "10 not found"
})