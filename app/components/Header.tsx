"use client"

import { signOut, useSession } from "next-auth/react"
import { useState, useRef, useEffect } from "react"

export default function Header() {
  const { data: session } = useSession()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  // fechar ao clicar fora
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <header className="w-full bg-white/70 backdrop-blur border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* LOGO */}
        <div className="font-semibold text-gray-900">
          Líder Hero
        </div>

        {/* USER */}
        {session && (
          <div className="relative" ref={ref}>

            {/* BOTÃO */}
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-gray-100 transition"
            >
              <img
                src={session.user?.image || ""}
                alt="user"
                className="w-9 h-9 rounded-full border border-gray-200 shadow-sm"
              />

              <span className="text-sm font-medium text-gray-700 hidden sm:block">
                {session.user?.name}
              </span>
            </button>

            {/* DROPDOWN */}
            {open && (
              <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-2xl shadow-lg p-2 animate-in fade-in zoom-in-95 duration-100">

                <div className="px-3 py-2 border-b text-sm text-gray-600">
                  {session.user?.email}
                </div>

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