import Link from "next/link";

export default function Jornada() {
  return (
    <main className="min-h-screen bg-gray-50 flex justify-center py-20">
      <div className="max-w-6xl w-full px-8">

        <Link
          href="/"
          className="text-gray-500 hover:text-gray-800 mb-8 inline-block"
        >
          ← Voltar
        </Link>

        <div className="mb-16">
          <h1 className="text-4xl font-bold text-gray-900">
            Jornada do Colaborador
          </h1>

          <p className="text-gray-500 mt-4 text-lg">
            Explore as etapas da jornada de experiência do colaborador na Hero.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-8">

          {/* Atração */}
          <div className="bg-gray-100 p-8 rounded-2xl opacity-60">
            <span className="text-xs bg-gray-200 px-3 py-1 rounded-full text-gray-600">
              EM BREVE
            </span>

            <h2 className="text-xl font-semibold mt-4 mb-2">
              Atração / Employer Branding
            </h2>

            <p className="text-gray-500">
              Como posicionar a Hero para atrair os talentos certos.
            </p>
          </div>


          {/* R&S */}
          <Link
            href="/rs"
            className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold mb-2">
              Recrutamento & Seleção
            </h2>

            <p className="text-gray-500">
              Aprenda a conduzir corretamente processos de R&S,
              desde a definição da vaga até o fechamento da contratação.
            </p>
          </Link>


          {/* Admissão */}
          <div className="bg-gray-100 p-8 rounded-2xl opacity-60">
            <span className="text-xs bg-gray-200 px-3 py-1 rounded-full text-gray-600">
              EM BREVE
            </span>

            <h2 className="text-xl font-semibold mt-4 mb-2">
              Admissão
            </h2>

            <p className="text-gray-500">
              Estruturação do processo de entrada do colaborador.
            </p>
          </div>


          {/* Onboarding Institucional */}
          <div className="bg-gray-100 p-8 rounded-2xl opacity-60">
            <span className="text-xs bg-gray-200 px-3 py-1 rounded-full text-gray-600">
              EM BREVE
            </span>

            <h2 className="text-xl font-semibold mt-4 mb-2">
              Onboarding Institucional
            </h2>

            <p className="text-gray-500">
              Integração cultural e entendimento da empresa.
            </p>
          </div>


          {/* Onboarding da Área */}
          <div className="bg-gray-100 p-8 rounded-2xl opacity-60">
            <span className="text-xs bg-gray-200 px-3 py-1 rounded-full text-gray-600">
              EM BREVE
            </span>

            <h2 className="text-xl font-semibold mt-4 mb-2">
              Onboarding da Área
            </h2>

            <p className="text-gray-500">
              Integração com a equipe e responsabilidades da função.
            </p>
          </div>


          {/* Desenvolvimento */}
          <Link
            href="/desenvolvimento"
            className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold mb-2">
              Desenvolvimento
            </h2>

            <p className="text-gray-500">
              Aprenda como desenvolver pessoas, conduzir feedbacks
              e evoluir talentos dentro da Hero.
            </p>
          </Link>


          {/* Engajamento */}
          <div className="bg-gray-100 p-8 rounded-2xl opacity-60">
            <span className="text-xs bg-gray-200 px-3 py-1 rounded-full text-gray-600">
              EM BREVE
            </span>

            <h2 className="text-xl font-semibold mt-4 mb-2">
              Engajamento
            </h2>

            <p className="text-gray-500">
              Ações para fortalecer conexão e cultura.
            </p>
          </div>


          {/* Retenção */}
          <div className="bg-gray-100 p-8 rounded-2xl opacity-60">
            <span className="text-xs bg-gray-200 px-3 py-1 rounded-full text-gray-600">
              EM BREVE
            </span>

            <h2 className="text-xl font-semibold mt-4 mb-2">
              Retenção
            </h2>

            <p className="text-gray-500">
              Estratégias para manter talentos na Hero.
            </p>
          </div>


          {/* Offboarding */}
          <div className="bg-gray-100 p-8 rounded-2xl opacity-60">
            <span className="text-xs bg-gray-200 px-3 py-1 rounded-full text-gray-600">
              EM BREVE
            </span>

            <h2 className="text-xl font-semibold mt-4 mb-2">
              Offboarding
            </h2>

            <p className="text-gray-500">
              Encerramento saudável da jornada do colaborador.
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}