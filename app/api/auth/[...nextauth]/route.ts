import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { createClient } from '@/lib/supabase/server'

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === 'google') {
        const supabase = await createClient()
        const { data, error } = await supabase.auth.signInWithOAuth({
          provider: 'google',
          options: {
            queryParams: {
              access_token: account.access_token!,
              token_type: 'Bearer'
            }
          }
        })
        if (error) return false
        
        // Sincroniza o usuário com o Supabase
        if (data) {
          user.id = account.providerAccountId
          user.accessToken = account.access_token
        }
      }
      return true
    },
    async session({ session, token }) {
      if (session?.user) {
        session.user.id = token.sub as string
        session.accessToken = token.accessToken as string
      }
      return session
    },
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token
      }
      return token
    }
  }
})

export { handler as GET, handler as POST } 