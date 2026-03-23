import Link from "next/link";

export default function RSPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 flex justify-center py-24">

      <div className="max-w-6xl w-full px-8">

        {/* VOLTAR */}

        <Link
          href="/jornada"
          className="text-sm text-gray-500 hover:text-gray-800 mb-10 inline-block"
        >
          ← Voltar para jornada
        </Link>


        {/* HEADER */}

        <div className="mb-16">

          <span className="text-xs bg-pink-100 text-pink-600 px-3 py-1 rounded-full">
            Jornada ativa
          </span>

          <h1 className="text-5xl font-bold mt-4 mb-6 leading-tight">
            Recrutamento & Seleção
          </h1>

          <p className="text-gray-500 text-lg max-w-2xl">
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

            <div className="text-3xl mb-4">
              🧠
            </div>

            <h3 className="text-xl font-semibold mb-2">
              1. Planejamento da vaga
            </h3>

            <p className="text-gray-600 text-sm mb-6">
              Definir necessidade, escopo da vaga e alinhamento com People.
            </p>

            <span className="text-sm font-medium text-pink-500 group-hover:translate-x-1 transition">
              Explorar →
            </span>

          </Link>


          {/* ABERTURA */}

          <Link
            href="/rs/abertura"
            className="group bg-white rounded-2xl p-8 border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
          >

            <div className="text-3xl mb-4">
              🚀
            </div>

            <h3 className="text-xl font-semibold mb-2">
              2. Abertura e alinhamento
            </h3>

            <p className="text-gray-600 text-sm mb-6">
              Como abrir uma vaga e iniciar o processo seletivo.
            </p>

            <span className="text-sm font-medium text-pink-500 group-hover:translate-x-1 transition">
              Explorar →
            </span>

          </Link>


          {/* PROCESSO */}

          <Link
            href="/rs/conducao"
            className="group bg-white rounded-2xl p-8 border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
          >

            <div className="text-3xl mb-4">
              🎯
            </div>

            <h3 className="text-xl font-semibold mb-2">
              3. Condução do processo
            </h3>

            <p className="text-gray-600 text-sm mb-6">
              Como conduzir entrevistas e avaliar candidatos.
            </p>

            <span className="text-sm font-medium text-pink-500 group-hover:translate-x-1 transition">
              Explorar →
            </span>

          </Link>


          {/* DECISÃO */}

          <Link
            href="/rs/decisao"
            className="group bg-white rounded-2xl p-8 border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
          >

            <div className="text-3xl mb-4">
              ✅
            </div>

            <h3 className="text-xl font-semibold mb-2">
              4. Decisão e fechamento
            </h3>

            <p className="text-gray-600 text-sm mb-6">
              Tomada de decisão, proposta e fechamento da vaga.
            </p>

            <span className="text-sm font-medium text-pink-500 group-hover:translate-x-1 transition">
              Explorar →
            </span>

          </Link>

        </div>

      </div>

    </main>
  );
}