// SUBSTITUIR TUDO

import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],

  // 🔴 ESSENCIAL PARA PRODUÇÃO
  secret: process.env.NEXTAUTH_SECRET,

  // (opcional, mas recomendado)
  pages: {
    signIn: "/",
  },
})

export { handler as GET, handler as POST }npm run dev
