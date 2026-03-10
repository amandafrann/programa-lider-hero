import Link from "next/link";

export default function DesenvolvimentoPage() {
  return (
    <div className="flex min-h-screen">

      {/* SIDEBAR */}
      <div className="w-72 border-r bg-white p-6">

        <Link
          href="/jornada"
          className="text-sm text-gray-500 mb-6 block hover:underline"
        >
          ← Voltar para jornada
        </Link>

        <h2 className="font-semibold text-lg mb-6">
          Desenvolvimento de Pessoas
        </h2>

        <div className="space-y-3">

          <Link
            href="/desenvolvimento/modulo-1"
            className="block bg-black text-white px-4 py-3 rounded-lg"
          >
            Módulo 1 — Feedback
          </Link>

          <div className="bg-gray-100 px-4 py-3 rounded-lg opacity-60">
            Módulo 2 — Gestão de Performance
          </div>

          <div className="bg-gray-100 px-4 py-3 rounded-lg opacity-60">
            Módulo 3 — Desenvolvimento de Talentos
          </div>

        </div>

      </div>


      {/* CONTEÚDO */}
      <div className="flex-1 p-16 max-w-4xl">

        <h1 className="text-4xl font-bold mb-4">
          Desenvolvimento de Pessoas
        </h1>

        <p className="text-gray-600 mb-10">
          Nesta jornada você aprenderá como desenvolver talentos,
          conduzir feedbacks e evoluir pessoas dentro da Hero.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">

          <h3 className="font-semibold mb-3">
            🎯 Objetivo da jornada
          </h3>

          <p className="text-gray-700">
            Ensinar líderes a desenvolver pessoas continuamente,
            utilizando feedback estruturado, ciclos de performance
            e planos de desenvolvimento.
          </p>

        </div>

      </div>
    </div>
  );
}