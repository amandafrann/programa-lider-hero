import Header from "../components/Header"

export default function PlataformaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-[#f6f7fb]">

      {/* HEADER */}
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

            <h2 className="text-lg font-semibold text-gray-900 leading-tight">
              Cobrança &{" "}
              <span className="text-pink-500">Negociação</span>
            </h2>

            <p className="text-xs text-gray-400 mt-1">
              Trilha Avançada • Financeiro
            </p>
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
          <nav className="space-y-4 text-sm">

            {/* FUNDAMENTOS */}
            <div>
              <div className="text-xs text-gray-400 mb-2">FUNDAMENTOS</div>

              <div className="bg-white border border-gray-200 p-4 rounded-xl shadow-sm relative">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-pink-500 rounded-l-xl"></div>

                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-900">
                    Identidade e Tom de Voz
                  </span>

                  <span className="text-green-500 text-xs">✔</span>
                </div>

                <p className="text-xs text-gray-400 mt-1">30 min</p>
              </div>

              <div className="mt-2 p-3 rounded-xl text-gray-600">
                O Ecossistema Hero
              </div>
            </div>

            {/* OPERACIONAL */}
            <div>
              <div className="text-xs text-gray-400 mb-2">OPERACIONAL</div>

              <div className="p-3 rounded-xl hover:bg-gray-100 cursor-pointer transition">
                Rotinas Financeiras
              </div>

              <div className="p-3 rounded-xl hover:bg-gray-100 cursor-pointer transition">
                Inadimplência e Serasa
              </div>
            </div>

            {/* GESTÃO */}
            <div>
              <div className="text-xs text-gray-400 mb-2">GESTÃO</div>

              <div className="p-3 rounded-xl hover:bg-gray-100 cursor-pointer transition">
                Mapeamento Operacional Estratégico
              </div>
            </div>

          </nav>

        </aside>

        {/* ÁREA PRINCIPAL */}
        <main className="flex-1 px-10 py-10">

          {/* CONTAINER CENTRAL (SEGREDO DO DESIGN) */}
          <div className="max-w-5xl mx-auto">

            {/* CARD PRINCIPAL */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-10">

              {children}

            </div>

          </div>

        </main>

      </div>

    </div>
  )
}