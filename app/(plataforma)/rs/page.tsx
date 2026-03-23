import Link from "next/link";

export default function RSPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 flex justify-center py-24">

      <div className="max-w-6xl w-full px-8">

        {/* VOLTAR (PADRÃO NOVO) */}
        <Link
          href="/jornada"
          className="group inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold text-gray-600 hover:text-pink-600 hover:bg-pink-50 transition-all duration-200 mb-10"
        >
          <span className="transition-transform duration-200 group-hover:-translate-x-1">
            ←
          </span>

          <span className="tracking-tight">
            Voltar para jornada
          </span>
        </Link>

        {/* HEADER */}
        <div className="mb-16">

          <span className="text-xs bg-pink-100 text-pink-600 px-3 py-1 rounded-full font-medium">
            Jornada ativa
          </span>

          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mt-4 mb-6 leading-tight text-gray-900">
            Recrutamento & Seleção
          </h1>

          <p className="text-gray-600 text-lg max-w-2xl leading-relaxed">
            Aprenda a conduzir processos de recrutamento desde o planejamento
            da vaga até a decisão final de contratação.
          </p>

        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* PLANEJAMENTO */}
          <Link
            href="/rs/planejamento"
            className="group bg-white rounded-2xl p-8 border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
          >
            <div className="text-3xl mb-4">🧠</div>

            <h3 className="text-xl font-semibold mb-2 text-gray-900">
              1. Planejamento da vaga
            </h3>

            <p className="text-gray-600 text-sm mb-6">
              Definir necessidade, escopo da vaga e alinhamento com People.
            </p>

            <span className="text-sm font-semibold text-pink-500 group-hover:translate-x-1 transition">
              Explorar →
            </span>
          </Link>

          {/* ABERTURA */}
          <Link
            href="/rs/abertura"
            className="group bg-white rounded-2xl p-8 border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
          >
            <div className="text-3xl mb-4">🚀</div>

            <h3 className="text-xl font-semibold mb-2 text-gray-900">
              2. Abertura e alinhamento
            </h3>

            <p className="text-gray-600 text-sm mb-6">
              Como abrir uma vaga e iniciar o processo seletivo.
            </p>

            <span className="text-sm font-semibold text-pink-500 group-hover:translate-x-1 transition">
              Explorar →
            </span>
          </Link>

          {/* PROCESSO (BLOQUEADO) */}
          <div className="relative bg-gray-50 rounded-2xl p-8 border border-gray-200 cursor-not-allowed">

            <span className="absolute top-4 left-4 text-xs bg-gray-200 text-gray-600 px-3 py-1 rounded-full">
              EM BREVE
            </span>

            <div className="text-3xl mb-4 opacity-50">🎯</div>

            <h3 className="text-xl font-semibold mb-2 text-gray-400">
              3. Condução do processo
            </h3>

            <p className="text-gray-400 text-sm mb-6">
              Como conduzir entrevistas e avaliar candidatos.
            </p>

            <span className="text-sm text-gray-300">
              Indisponível
            </span>

          </div>

          {/* DECISÃO (BLOQUEADO) */}
          <div className="relative bg-gray-50 rounded-2xl p-8 border border-gray-200 cursor-not-allowed">

            <span className="absolute top-4 left-4 text-xs bg-gray-200 text-gray-600 px-3 py-1 rounded-full">
              EM BREVE
            </span>

            <div className="text-3xl mb-4 opacity-50">✅</div>

            <h3 className="text-xl font-semibold mb-2 text-gray-400">
              4. Decisão e fechamento
            </h3>

            <p className="text-gray-400 text-sm mb-6">
              Tomada de decisão, proposta e fechamento da vaga.
            </p>

            <span className="text-sm text-gray-300">
              Indisponível
            </span>

          </div>

        </div>

      </div>

    </main>
  );
}