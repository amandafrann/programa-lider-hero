import Link from "next/link";

export default function DesenvolvimentoPage() {
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

          <span className="text-xs bg-purple-100 text-purple-600 px-3 py-1 rounded-full">
            Jornada ativa
          </span>

          <h1 className="text-5xl font-bold mt-4 mb-6 leading-tight">
            Desenvolvimento de Pessoas
          </h1>

          <p className="text-gray-500 text-lg max-w-2xl">
            Aprenda como desenvolver talentos, conduzir feedbacks
            e evoluir pessoas dentro da Hero.
          </p>

        </div>


        {/* GESTÃO DE PERFORMANCE */}

        <div className="mb-14">

          <h2 className="text-2xl font-semibold mb-4">
            Gestão de Performance
          </h2>

          <p className="text-gray-500 mb-8 max-w-2xl">
            Na Hero, a gestão de performance acontece de forma contínua.
            Líderes acompanham evolução, identificam riscos e promovem
            desenvolvimento constante do time.
          </p>

          <div className="grid md:grid-cols-3 gap-6">

            <Link
              href="/desenvolvimento/performance/feedback"
              className="group bg-white rounded-2xl p-6 border border-gray-200 shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="text-2xl mb-3">💬</div>
              <h3 className="font-semibold mb-1">Feedback</h3>
              <p className="text-sm text-gray-600">
                Conversas estruturadas para desenvolver pessoas.
              </p>
            </Link>

            <Link
              href="/desenvolvimento/performance/pulso"
              className="group bg-white rounded-2xl p-6 border border-gray-200 shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="text-2xl mb-3">📊</div>
              <h3 className="font-semibold mb-1">Pulso</h3>
              <p className="text-sm text-gray-600">
                Monitoramento frequente do clima e evolução do time.
              </p>
            </Link>

            <Link
              href="/desenvolvimento/performance/calibracao"
              className="group bg-white rounded-2xl p-6 border border-gray-200 shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="text-2xl mb-3">⚖️</div>
              <h3 className="font-semibold mb-1">Calibração</h3>
              <p className="text-sm text-gray-600">
                Ritual estratégico de avaliação de talentos.
              </p>
            </Link>

            <Link
              href="/desenvolvimento/performance/one-on-one"
              className="group bg-white rounded-2xl p-6 border border-gray-200 shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="text-2xl mb-3">👥</div>
              <h3 className="font-semibold mb-1">1:1</h3>
              <p className="text-sm text-gray-600">
                Conversas recorrentes de acompanhamento individual.
              </p>
            </Link>

            <Link
              href="/desenvolvimento/performance/yellow-flag"
              className="group bg-white rounded-2xl p-6 border border-gray-200 shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="text-2xl mb-3">🚩</div>
              <h3 className="font-semibold mb-1">Yellow Flag</h3>
              <p className="text-sm text-gray-600">
                Identificação preventiva de riscos de performance.
              </p>
            </Link>

          </div>

        </div>


        {/* DESENVOLVIMENTO DE CARREIRA */}

        <div>

          <h2 className="text-2xl font-semibold mb-4">
            Desenvolvimento de Carreira
          </h2>

          <p className="text-gray-500 mb-8 max-w-2xl">
            O desenvolvimento de carreira na Hero busca garantir crescimento
            estruturado e transparente para cada colaborador.
          </p>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="bg-white rounded-2xl p-6 border border-gray-200 opacity-60 shadow-sm">

              <span className="text-xs bg-gray-100 px-3 py-1 rounded-full">
                EM BREVE
              </span>

              <div className="text-2xl mt-4 mb-2">
                🌱
              </div>

              <h3 className="font-semibold">
                Planos de desenvolvimento
              </h3>

              <p className="text-sm text-gray-500">
                Estruturação de planos individuais de crescimento.
              </p>

            </div>


            <div className="bg-white rounded-2xl p-6 border border-gray-200 opacity-60 shadow-sm">

              <span className="text-xs bg-gray-100 px-3 py-1 rounded-full">
                EM BREVE
              </span>

              <div className="text-2xl mt-4 mb-2">
                📈
              </div>

              <h3 className="font-semibold">
                Progressão de carreira
              </h3>

              <p className="text-sm text-gray-500">
                Estrutura de crescimento e evolução profissional.
              </p>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}