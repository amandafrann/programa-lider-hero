import Link from "next/link";

export default function JornadaPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 flex justify-center pt-24 pb-20">

      <div className="max-w-6xl w-full px-8">

        {/* VOLTAR */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 mb-10 transition"
        >
          <span className="text-base">←</span>
          Voltar para início
        </Link>

        {/* BADGE */}
        <div className="mb-6">
          <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">
            🚀 Plataforma em evolução
          </span>
        </div>

        {/* HEADER */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 leading-tight text-gray-900">
            Jornada do
            <span className="text-pink-500"> Hero</span>
          </h1>

          <p className="text-gray-600 text-lg max-w-2xl leading-relaxed">
            Explore as etapas da jornada de experiência do colaborador na Hero
            e aprenda a conduzir cada fase com excelência como líder.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* ATRAÇÃO */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 opacity-60 shadow-sm">
            <span className="text-xs bg-gray-100 px-3 py-1 rounded-full">
              EM BREVE
            </span>

            <div className="text-3xl mt-6 mb-4">🎯</div>

            <h3 className="text-xl font-semibold mb-2">
              Atração / Employer Branding
            </h3>

            <p className="text-gray-500 text-sm">
              Como posicionar a Hero para atrair os talentos certos.
            </p>
          </div>

          {/* R&S */}
          <Link
            href="/rs"
            className="group relative bg-white rounded-2xl p-8 border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02]"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition"></div>

            <span className="relative text-xs bg-pink-100 text-pink-600 px-3 py-1 rounded-full">
              DISPONÍVEL
            </span>

            <div className="relative text-3xl mt-6 mb-4">🔎</div>

            <h3 className="relative text-xl font-semibold mb-2">
              Recrutamento & Seleção
            </h3>

            <p className="relative text-gray-600 text-sm mb-6">
              Aprenda a conduzir processos de R&S desde o planejamento da vaga
              até a decisão final de contratação.
            </p>

            <div className="relative text-sm font-medium text-pink-500 group-hover:translate-x-1 transition">
              Explorar →
            </div>
          </Link>

          {/* ADMISSÃO */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 opacity-60 shadow-sm">
            <span className="text-xs bg-gray-100 px-3 py-1 rounded-full">
              EM BREVE
            </span>

            <div className="text-3xl mt-6 mb-4">📄</div>

            <h3 className="text-xl font-semibold mb-2">
              Admissão
            </h3>

            <p className="text-gray-500 text-sm">
              Estruturação do processo de entrada do colaborador.
            </p>
          </div>

          {/* ONBOARDING INSTITUCIONAL */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 opacity-60 shadow-sm">
            <span className="text-xs bg-gray-100 px-3 py-1 rounded-full">
              EM BREVE
            </span>

            <div className="text-3xl mt-6 mb-4">🏢</div>

            <h3 className="text-xl font-semibold mb-2">
              Onboarding Institucional
            </h3>

            <p className="text-gray-500 text-sm">
              Integração cultural e entendimento da empresa.
            </p>
          </div>

          {/* ONBOARDING ÁREA */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 opacity-60 shadow-sm">
            <span className="text-xs bg-gray-100 px-3 py-1 rounded-full">
              EM BREVE
            </span>

            <div className="text-3xl mt-6 mb-4">👥</div>

            <h3 className="text-xl font-semibold mb-2">
              Onboarding da Área
            </h3>

            <p className="text-gray-500 text-sm">
              Integração com a equipe e responsabilidades da função.
            </p>
          </div>

          {/* DESENVOLVIMENTO */}
          <Link
            href="/desenvolvimento"
            className="group relative bg-white rounded-2xl p-8 border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02]"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition"></div>

            <span className="relative text-xs bg-purple-100 text-purple-600 px-3 py-1 rounded-full">
              DISPONÍVEL
            </span>

            <div className="relative text-3xl mt-6 mb-4">📈</div>

            <h3 className="relative text-xl font-semibold mb-2">
              Desenvolvimento
            </h3>

            <p className="relative text-gray-600 text-sm mb-6">
              Aprenda como desenvolver pessoas, conduzir feedbacks
              e evoluir talentos dentro da Hero.
            </p>

            <div className="relative text-sm font-medium text-purple-500 group-hover:translate-x-1 transition">
              Explorar →
            </div>
          </Link>

        </div>

      </div>

    </main>
  );
}