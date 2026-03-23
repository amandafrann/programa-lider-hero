import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],

  // 🔐 ESSENCIAL PARA PRODUÇÃO
  secret: process.env.NEXTAUTH_SECRET,

  // (opcional) usa sua home como tela de login
  pages: {
    signIn: "/",
  },

  callbacks: {
    async session({ session }) {
      return session
    },
  },
})

export { handler as GET, handler as POST }