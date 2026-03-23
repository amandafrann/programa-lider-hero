"use client"

import { signIn, signOut, useSession } from "next-auth/react"

export default function Hero() {
  const { data: session } = useSession()

  return (
    <section className="relative overflow-hidden">

      {/* BACKGROUND GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-white to-purple-50" />

      {/* CONTEÚDO */}
      <div className="relative max-w-7xl mx-auto px-6 py-32">

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LADO ESQUERDO */}
          <div>

            <span className="inline-block text-xs font-medium bg-pink-100 text-pink-600 px-3 py-1 rounded-full mb-6">
              ✨ Programa Líder Hero
            </span>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Plataforma de
              <span className="text-pink-600"> liderança prática</span>
            </h1>

            <p className="text-gray-600 text-lg mb-8 max-w-xl">
              Execute processos de gestão com clareza, consistência e impacto real.
              Um playbook completo para líderes.
            </p>

            {/* BOTÕES */}
            <div className="flex gap-4">

              <a
                href="/jornada"
                className="bg-black text-white px-6 py-3 rounded-xl text-sm font-medium shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all"
              >
                Explorar jornadas →
              </a>

              <a
                href="/wiki"
                className="bg-white border border-gray-200 px-6 py-3 rounded-xl text-sm font-medium shadow-md hover:shadow-lg hover:scale-[1.02] transition-all"
              >
                Acessar Wiki
              </a>

            </div>

          </div>

          {/* LADO DIREITO */}
          <div className="hidden md:block">

            <div className="bg-white/80 backdrop-blur border border-gray-200 rounded-3xl p-8 shadow-xl">

              {!session ? (
                <>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Acesse sua jornada
                  </h3>

                  <p className="text-sm text-gray-500 mb-6">
                    Entre com sua conta para acompanhar seu progresso
                  </p>

                  <button
                    onClick={() => signIn("google", { callbackUrl: "/jornada" })}
                    className="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 px-5 py-3 rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] transition-all"
                  >
                    🔐 Entrar com Google
                  </button>
                </>
              ) : (
                <>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Bem-vinda 👋
                  </h3>

                  <p className="text-sm text-gray-600 mb-6">
                    {session.user?.name}
                  </p>

                  <button
                    onClick={() => signOut({ callbackUrl: "/" })}
                    className="w-full bg-black text-white px-5 py-3 rounded-xl shadow-md hover:shadow-lg transition"
                  >
                    Sair
                  </button>
                </>
              )}

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}