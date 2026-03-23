"use client"

import { signOut, useSession } from "next-auth/react"

export default function Header() {
  const { data: session } = useSession()

  return (
    <header className="w-full border-b bg-white/80 backdrop-blur sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <div className="font-semibold text-gray-900">
          Líder Hero
        </div>

        {/* USER */}
        {session && (
          <div className="flex items-center gap-4">

            <div className="text-sm text-gray-600">
              {session.user?.name}
            </div>

            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="text-sm bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-lg transition cursor-pointer"
            >
              Sair
            </button>

          </div>
        )}

      </div>
    </header>
  )
}