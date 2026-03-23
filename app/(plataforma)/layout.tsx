import Header from "../components/Header" // ✅ CAMINHO CORRETO

export default function PlataformaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-[#f7f7f8]">

      {/* HEADER GLOBAL */}
      <Header />

      <div className="flex">

        {/* SIDEBAR */}
        <aside className="w-80 bg-white border-r border-gray-200 h-[calc(100vh-64px)] sticky top-16 p-6 overflow-y-auto">

          {/* VOLTAR */}
          <div className="mb-6 text-sm text-gray-500 hover:text-gray-800 cursor-pointer transition">
            ← Voltar ao início
          </div>

          {/* TRILHA */}
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

            {/* FUNDAMENTOS */}
            <div className="text-xs text-gray-400 mt-6 mb-2">
              FUNDAMENTOS
            </div>

            <div className="bg-white border border-gray-200 p-3 rounded-xl font-medium shadow-sm relative">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-pink-500 rounded-l-xl"></div>
              O Ecossistema Hero
            </div>

            {/* OPERACIONAL */}
            <div className="text-xs text-gray-400 mt-6 mb-2">
              OPERACIONAL
            </div>

            <div className="p-3 rounded-xl hover:bg-gray-100 cursor-pointer transition">
              Rotinas Financeiras
            </div>

            <div className="p-3 rounded-xl hover:bg-gray-100 cursor-pointer transition">
              Inadimplência e Serasa
            </div>

            {/* GESTÃO */}
            <div className="text-xs text-gray-400 mt-6 mb-2">
              GESTÃO
            </div>

            <div className="p-3 rounded-xl hover:bg-gray-100 cursor-pointer transition">
              Mapeamento Operacional Estratégico
            </div>

          </nav>

        </aside>

        {/* CONTEÚDO */}
        <main className="flex-1 bg-gradient-to-b from-white via-gray-50 to-gray-100 px-12 py-12">
          {children}
        </main>

      </div>

    </div>
  )
}