"use client"

import { signIn, signOut, useSession } from "next-auth/react"

export default function Hero() {
  const { data: session } = useSession()

  return (
    <section className="relative overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-white to-purple-50" />

      {/* CONTEÚDO */}
      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-28 md:pt-28 md:pb-32">

        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">

          {/* LADO ESQUERDO */}
          <div>
            <span className="inline-block text-xs font-medium bg-pink-100 text-pink-600 px-3 py-1 rounded-full mb-6">
              ✨ Programa Líder Hero
            </span>

            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 leading-tight mb-6">
              Plataforma
              <br />
              <span className="text-pink-600">
                Líder Hero
              </span>
            </h1>

            <p className="text-gray-600 text-lg mb-8 max-w-xl leading-relaxed">
              Execute processos de gestão com clareza e impacto real.
            </p>

            <div className="flex gap-4">
              <a
                href="/jornada"
                className="bg-black text-white px-6 py-3 rounded-xl text-sm font-medium shadow-md hover:shadow-lg transition hover:scale-[1.02]"
              >
                Explorar Jornada →
              </a>

              <a
                href="/wiki"
                className="bg-white border border-gray-200 px-6 py-3 rounded-xl text-sm font-medium shadow-sm hover:shadow-md transition hover:scale-[1.02]"
              >
                Wiki Hero
              </a>
            </div>
          </div>

          {/* LADO DIREITO */}
          <div>
            <div className="bg-white/80 backdrop-blur border border-gray-200 rounded-3xl p-8 shadow-xl">

              {!session ? (
                <>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Acesse
                  </h3>

                  <p className="text-sm text-gray-500 mb-6">
                    Entre com sua conta para acessar o conteúdo
                  </p>

                  <button
                    onClick={() => signIn("google", { callbackUrl: "/jornada" })}
                    className="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 px-5 py-3 rounded-xl shadow-sm hover:shadow-md hover:bg-gray-50 transition-all cursor-pointer hover:scale-[1.01] active:scale-[0.99]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 48 48"
                      className="w-5 h-5"
                    >
                      <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303C33.68 32.657 29.195 36 24 36c-6.627 
                      0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 
                      1.154 7.961 3.039l5.657-5.657C34.046 
                      6.053 29.268 4 24 4 12.955 4 4 12.955 4 
                      24s8.955 20 20 20 20-8.955 
                      20-20c0-1.341-.138-2.65-.389-3.917z"/>
                      <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 
                      16.108 18.961 13 24 13c3.059 0 5.842 
                      1.154 7.961 3.039l5.657-5.657C34.046 
                      6.053 29.268 4 24 4c-7.732 0-14.41 
                      4.41-17.694 10.691z"/>
                      <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 
                      13.409-5.192l-6.19-5.238C29.211 
                      35.091 26.715 36 24 36c-5.176 
                      0-9.652-3.327-11.283-7.946l-6.522 
                      5.025C9.435 39.556 16.227 44 24 44z"/>
                      <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-1.057 
                      3.015-3.052 5.551-5.581 
                      7.282l6.19 5.238C39.99 36.49 
                      44 30.782 44 24c0-1.341-.138-2.65-.389-3.917z"/>
                    </svg>

                    <span className="text-sm font-medium text-gray-700">
                      Continuar com Google
                    </span>
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
                    className="w-full bg-black text-white px-5 py-3 rounded-xl shadow-md hover:shadow-lg transition cursor-pointer hover:scale-[1.01] active:scale-[0.99]"
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