"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AberturaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <div className="flex gap-8">

      {/* SIDEBAR */}
      <aside className="w-80">

        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm sticky top-24">

          {/* VOLTAR (PADRÃO PREMIUM) */}
          <Link
            href="/rs"
            className="group inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold text-gray-600 hover:text-pink-600 hover:bg-pink-50 transition-all duration-200"
          >
            <span className="transition-transform duration-200 group-hover:-translate-x-1">
              ←
            </span>

            <span className="tracking-tight">
              Voltar pra R&S
            </span>
          </Link>

          {/* TÍTULO */}
          <h2 className="mt-6 text-lg font-semibold text-gray-900">
            Abertura & Alinhamento
          </h2>

          {/* LISTA */}
          <div className="mt-6 space-y-3">

            {/* ABERTURA */}
            <Link
              href="/rs/abertura"
              className={`block rounded-xl p-4 transition border ${
                isActive("/rs/abertura")
                  ? "bg-white shadow-md border-gray-200"
                  : "bg-gray-50 hover:bg-gray-100 border-transparent"
              }`}
            >
              <div className="flex justify-between items-center">

                <div>
                  <p className="font-medium text-gray-900">
                    Abertura da vaga
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    7 min
                  </p>
                </div>

                {isActive("/rs/abertura") && (
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                )}

              </div>
            </Link>

            {/* ALINHAMENTO */}
            <Link
              href="/rs/abertura/alinhamento"
              className={`block rounded-xl p-4 transition border ${
                isActive("/rs/abertura/alinhamento")
                  ? "bg-white shadow-md border-gray-200"
                  : "bg-gray-50 hover:bg-gray-100 border-transparent"
              }`}
            >
              <div className="flex justify-between items-center">

                <div>
                  <p className="font-medium text-gray-900">
                    Alinhamento com People
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    5 min
                  </p>
                </div>

                {isActive("/rs/abertura/alinhamento") && (
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                )}

              </div>
            </Link>

          </div>

        </div>

      </aside>

      {/* CONTEÚDO */}
      <div className="flex-1">

        <div className="bg-white border border-gray-200 rounded-2xl p-10 shadow-sm">
          {children}
        </div>

      </div>

    </div>
  );
}