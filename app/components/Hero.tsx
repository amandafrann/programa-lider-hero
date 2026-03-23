"use client"

import { signIn, signOut, useSession } from "next-auth/react"

export default function Hero() {
  const { data: session, status } = useSession()

  return (
    <section className="p-10">

      <h1 className="text-2xl font-bold mb-4">
        DEBUG LOGIN
      </h1>

      <p>Status: {status}</p>

      {session ? (
        <>
          <p>Usuário: {session.user?.name}</p>

          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="mt-4 bg-black text-white px-4 py-2 rounded"
          >
            Sair
          </button>
        </>
      ) : (
        <button
          onClick={() => signIn("google")}
          className="mt-4 bg-gray-200 px-4 py-2 rounded"
        >
          Entrar com Google
        </button>
      )}

    </section>
  )
}