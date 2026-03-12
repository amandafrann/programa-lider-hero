import Link from "next/link";

export default function JornadaPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex justify-center py-20">

      <div className="max-w-6xl w-full px-8">

        <Link
          href="/"
          className="text-gray-500 hover:text-gray-800 mb-8 inline-block"
        >
          ← Voltar
        </Link>

        <h1 className="text-4xl font-bold mb-4">
          Jornada do Colaborador Hero
        </h1>

        <p className="text-gray-500 mb-12">
          Explore as etapas da jornada de experiência do colaborador na Hero.
        </p>


        {/* GRID */}

        <div className="grid md:grid-cols-3 gap-8">


          {/* ATRAÇÃO */}

          <div className="bg-white rounded-2xl p-8 border border-gray-100 opacity-50 shadow-sm">

            <span className="text-xs bg-gray-100 px-3 py-1 rounded-full">
              EM BREVE
            </span>

            <h3 className="text-xl font-semibold mt-6 mb-2">
              Atração / Employer Branding
            </h3>

            <p className="text-gray-500 text-sm">
              Como posicionar a Hero para atrair os talentos certos.
            </p>

          </div>


          {/* R&S */}

          <Link
            href="/rs"
            className="group relative bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
          >

            {/* glow */}

            <div className="absolute -top-6 -left-6 w-24 h-24 bg-pink-500/20 blur-3xl rounded-full"></div>

            {/* badge */}

            <span className="text-xs bg-pink-100 text-pink-600 px-3 py-1 rounded-full">
              DISPONÍVEL
            </span>

            <div className="bg-gradient-to-r from-pink-500 to-purple-500 w-10 h-10 rounded-lg mb-6 mt-4"></div>

            <h3 className="text-xl font-semibold mb-2">
              Recrutamento & Seleção
            </h3>

            <p className="text-gray-600 text-sm mb-6">
              Aprenda a conduzir processos de R&S desde o planejamento
              da vaga até a decisão final de contratação.
            </p>

            <div className="text-sm font-medium text-pink-500 group-hover:translate-x-1 transition">
              Explorar →
            </div>

          </Link>


          {/* ADMISSÃO */}

          <div className="bg-white rounded-2xl p-8 border border-gray-100 opacity-50 shadow-sm">

            <span className="text-xs bg-gray-100 px-3 py-1 rounded-full">
              EM BREVE
            </span>

            <h3 className="text-xl font-semibold mt-6 mb-2">
              Admissão
            </h3>

            <p className="text-gray-500 text-sm">
              Estruturação do processo de entrada do colaborador.
            </p>

          </div>


          {/* ONBOARDING INSTITUCIONAL */}

          <div className="bg-white rounded-2xl p-8 border border-gray-100 opacity-50 shadow-sm">

            <span className="text-xs bg-gray-100 px-3 py-1 rounded-full">
              EM BREVE
            </span>

            <h3 className="text-xl font-semibold mt-6 mb-2">
              Onboarding Institucional
            </h3>

            <p className="text-gray-500 text-sm">
              Integração cultural e entendimento da empresa.
            </p>

          </div>


          {/* ONBOARDING ÁREA */}

          <div className="bg-white rounded-2xl p-8 border border-gray-100 opacity-50 shadow-sm">

            <span className="text-xs bg-gray-100 px-3 py-1 rounded-full">
              EM BREVE
            </span>

            <h3 className="text-xl font-semibold mt-6 mb-2">
              Onboarding da Área
            </h3>

            <p className="text-gray-500 text-sm">
              Integração com a equipe e responsabilidades da função.
            </p>

          </div>


          {/* DESENVOLVIMENTO */}

          <Link
            href="/desenvolvimento"
            className="group relative bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
          >

            <div className="absolute -top-6 -left-6 w-24 h-24 bg-purple-500/20 blur-3xl rounded-full"></div>

            <span className="text-xs bg-purple-100 text-purple-600 px-3 py-1 rounded-full">
              DISPONÍVEL
            </span>

            <div className="bg-gradient-to-r from-purple-500 to-indigo-500 w-10 h-10 rounded-lg mb-6 mt-4"></div>

            <h3 className="text-xl font-semibold mb-2">
              Desenvolvimento
            </h3>

            <p className="text-gray-600 text-sm mb-6">
              Aprenda como desenvolver pessoas, conduzir feedbacks
              e evoluir talentos dentro da Hero.
            </p>

            <div className="text-sm font-medium text-purple-500 group-hover:translate-x-1 transition">
              Explorar →
            </div>

          </Link>

        </div>

      </div>

    </main>
  );
}