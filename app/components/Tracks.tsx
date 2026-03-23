export default function Tracks() {
  return (
    <section className="max-w-7xl mx-auto px-6 pb-24 mt-10 md:mt-16">

      {/* HEADER */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-3">
          Trilhas rápidas
        </h2>

        <p className="text-gray-600 text-lg">
          Selecione uma trilha para iniciar seu aprendizado
        </p>
      </div>

      {/* CARDS */}
      <div className="grid md:grid-cols-3 gap-8">

        {/* CARD ATIVO */}
        <a
          href="/rs"
          className="group bg-white border border-gray-200 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
        >
          <div className="mb-6">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-pink-100 text-pink-600 text-xl">
              🎯
            </div>
          </div>

          <h3 className="text-lg font-semibold mb-2 text-gray-900">
            Recrutamento & Seleção
          </h3>

          <p className="text-sm text-gray-600 mb-6">
            Realize processos seletivos com clareza e qualidade
          </p>

          <div className="text-sm text-pink-600 font-medium group-hover:underline">
            Acessar trilha →
          </div>
        </a>

        {/* CARD BLOQUEADO */}
        <div className="bg-white border border-gray-200 rounded-3xl p-8 opacity-60">
          <div className="mb-6">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gray-100 text-gray-400 text-xl">
              🔄
            </div>
          </div>

          <h3 className="text-lg font-semibold mb-2 text-gray-700">
            Desenvolvimento
          </h3>

          <p className="text-sm text-gray-500 mb-6">
            Evolução contínua do time e liderança
          </p>

          <span className="text-xs bg-gray-100 px-3 py-1 rounded-full">
            Em breve
          </span>
        </div>

        {/* CARD BLOQUEADO */}
        <div className="bg-white border border-gray-200 rounded-3xl p-8 opacity-60">
          <div className="mb-6">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gray-100 text-gray-400 text-xl">
              📉
            </div>
          </div>

          <h3 className="text-lg font-semibold mb-2 text-gray-700">
            Performance & Gestão
          </h3>

          <p className="text-sm text-gray-500 mb-6">
            Gestão de performance e avaliação
          </p>

          <span className="text-xs bg-gray-100 px-3 py-1 rounded-full">
            Em breve
          </span>
        </div>

      </div>
    </section>
  )
}