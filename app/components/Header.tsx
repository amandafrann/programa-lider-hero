"use client"

import { signOut, useSession } from "next-auth/react"
import { useState } from "react"

export default function Header() {
  const { data: session } = useSession()
  const [open, setOpen] = useState(false)

  return (
    <header className="w-full border-b bg-white/80 backdrop-blur sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <div className="font-semibold text-gray-900">
          Líder Hero
        </div>

        {/* USER */}
        {session && (
          <div className="relative">

            {/* BOTÃO (avatar + nome) */}
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center gap-3 hover:bg-gray-100 px-3 py-2 rounded-xl transition cursor-pointer"
            >
              {/* FOTO */}
              <img
                src={session.user?.image || ""}
                alt="user"
                className="w-8 h-8 rounded-full"
              />

              {/* NOME */}
              <span className="text-sm font-medium text-gray-700">
                {session.user?.name}
              </span>
            </button>

            {/* DROPDOWN */}
            {open && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-lg p-2">

                <button
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className="w-full text-left px-3 py-2 text-sm rounded-lg hover:bg-gray-100 transition"
                >
                  Sair
                </button>

              </div>
            )}

          </div>
        )}

      </div>
    </header>
  )
}