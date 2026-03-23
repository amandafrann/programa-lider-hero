import Header from "@/components/Header"

export default function PlataformaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* HEADER GLOBAL */}
      <Header />

      <div className="flex">

        {/* SIDEBAR */}
        <aside className="w-80 bg-white border-r border-gray-200 min-h-screen p-6 overflow-y-auto">

          <div className="mb-8">
            <p className="text-xs text-gray-400 mb-1">Trilha</p>

            <h2 className="text-lg font-semibold text-gray-900">
              Cobrança &{" "}
              <span className="text-pink-500">Negociação</span>
            </h2>
          </div>

          {/* PROGRESSO */}
          <div className="mb-8">
            <div className="flex justify-between text-xs mb-2">
              <span className="text-gray-500">Seu progresso</span>
              <span className="text-pink-500 font-medium">38%</span>
            </div>

            <div className="w-full h-2 bg-gray-200 rounded-full">
              <div className="w-[38%] h-2 bg-pink-500 rounded-full"></div>
            </div>
          </div>

          {/* MENU */}
          <nav className="space-y-2 text-sm">

            <div className="text-xs text-gray-400 mt-6 mb-2">
              FUNDAMENTOS
            </div>

            <div className="bg-pink-50 border border-pink-200 p-3 rounded-xl font-medium">
              O Ecossistema Hero
            </div>

            <div className="text-xs text-gray-400 mt-6 mb-2">
              OPERACIONAL
            </div>

            <div className="p-3 rounded-xl hover:bg-gray-100 cursor-pointer transition">
              Rotinas Financeiras
            </div>

            <div className="p-3 rounded-xl hover:bg-gray-100 cursor-pointer transition">
              Inadimplência e Serasa
            </div>

            <div className="text-xs text-gray-400 mt-6 mb-2">
              GESTÃO
            </div>

            <div className="p-3 rounded-xl hover:bg-gray-100 cursor-pointer transition">
              Mapeamento Operacional Estratégico
            </div>

          </nav>

        </aside>

        {/* CONTEÚDO */}
        <main className="flex-1 bg-gradient-to-b from-white via-gray-50 to-gray-100 px-10 py-16">
          {children}
        </main>

      </div>

    </div>
  )
}