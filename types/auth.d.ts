import "next-auth"

declare module "next-auth" {
  interface Session {
    accessToken?: string
    user: {
      id?: string
    } & DefaultSession["user"]
  }

  interface User {
    id?: string
    accessToken?: string
  }
} 