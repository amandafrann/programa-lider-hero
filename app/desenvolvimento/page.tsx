import Link from "next/link";

export default function DesenvolvimentoPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex justify-center py-20">

      <div className="max-w-5xl w-full px-8">

        <Link
          href="/jornada"
          className="text-gray-500 hover:text-gray-800 mb-8 inline-block"
        >
          ← Voltar para jornada
        </Link>

        <h1 className="text-4xl font-bold mb-4">
          Desenvolvimento de Pessoas
        </h1>

        <p className="text-gray-500 mb-12">
          Aprenda como desenvolver talentos, conduzir feedbacks e evoluir pessoas dentro da Hero.
        </p>


        {/* GESTÃO DE PERFORMANCE */}

        <div className="mb-12">

          <h2 className="text-xl font-semibold mb-2">
            Gestão de Performance
          </h2>

          <p className="text-gray-500 mb-6">
            Na Hero, a gestão de performance acontece de forma contínua ao longo da jornada do colaborador. 
            Líderes acompanham evolução, identificam oportunidades de desenvolvimento e atuam de forma preventiva
            para manter o time saudável e performando.
          </p>

          <div className="grid grid-cols-3 gap-4">

            <Link
              href="/desenvolvimento/performance/feedback"
              className="bg-white border rounded-lg p-4 hover:shadow-sm transition"
            >
              Feedback
            </Link>

            <Link
              href="/desenvolvimento/performance/pulso"
              className="bg-white border rounded-lg p-4 hover:shadow-sm transition"
            >
              Pulso
            </Link>

            <Link
              href="/desenvolvimento/performance/calibracao"
              className="bg-white border rounded-lg p-4 hover:shadow-sm transition"
            >
              Calibração
            </Link>

            <Link
              href="/desenvolvimento/performance/one-on-one"
              className="bg-white border rounded-lg p-4 hover:shadow-sm transition"
            >
              1:1
            </Link>

            <Link
              href="/desenvolvimento/performance/yellow-flag"
              className="bg-white border rounded-lg p-4 hover:shadow-sm transition"
            >
              Yellow Flag
            </Link>

          </div>

        </div>


        {/* DESENVOLVIMENTO DE CARREIRA */}

        <div>

          <h2 className="text-xl font-semibold mb-2">
            Desenvolvimento de Carreira
          </h2>

          <p className="text-gray-500 mb-6">
            O desenvolvimento de carreira na Hero busca garantir crescimento estruturado e transparente. 
            Líderes apoiam a evolução profissional das pessoas por meio de planos de desenvolvimento, 
            decisões de mérito e oportunidades de progressão.
          </p>

          <div className="grid grid-cols-3 gap-4">

            <Link
              href="/desenvolvimento/carreira/pdi"
              className="bg-white border rounded-lg p-4 hover:shadow-sm transition"
            >
              PDI
            </Link>

            <Link
              href="/desenvolvimento/carreira/promocoes"
              className="bg-white border rounded-lg p-4 hover:shadow-sm transition"
            >
              Méritos e Promoções
            </Link>

          </div>

        </div>

      </div>

    </main>
  );
}