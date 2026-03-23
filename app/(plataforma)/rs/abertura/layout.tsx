import Link from "next/link"

export default function AberturaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex gap-6">

      {/* SIDEBAR */}
      <aside className="w-72 bg-white border border-gray-200 rounded-2xl p-6 h-fit sticky top-24">

        <Link href="/rs" className="text-sm text-gray-500 hover:text-gray-800">
          ← Voltar para jornada
        </Link>

        <h2 className="mt-6 font-semibold text-gray-900">R&S</h2>

        <div className="mt-4 space-y-2">

          <Link
            href="/rs/abertura"
            className="block bg-gray-100 px-4 py-2 rounded-lg"
          >
            Abrir vaga na Gupy
          </Link>

          <Link
            href="/rs/abertura/alinhamento"
            className="block bg-gray-50 px-4 py-2 rounded-lg"
          >
            Alinhamento com R&S
          </Link>

        </div>

      </aside>

      {/* CONTEÚDO */}
      <div className="flex-1">

        <div className="bg-white border border-gray-200 rounded-2xl p-10 shadow-sm max-w-5xl">
          {children}
        </div>

      </div>

    </div>
  )
}