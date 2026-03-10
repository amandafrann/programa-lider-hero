import Link from "next/link";

export default function PlanejamentoVaga() {
  return (
    <div className="flex min-h-screen">

      {/* SIDEBAR */}

      <div className="w-72 border-r bg-white p-6">

        <Link
          href="/rs"
          className="text-sm text-gray-500 mb-6 block hover:underline"
        >
          ← Voltar para R&S
        </Link>

        <h2 className="font-semibold text-lg mb-6">
          Planejamento da vaga
        </h2>

        <div className="space-y-3">

          <Link
            href="/rs/temas/planejamento-vaga/modulo-1/aula-1"
            className="block bg-gray-100 px-4 py-3 rounded-lg hover:bg-gray-200"
          >
            Aula 1 — Definir necessidade da vaga
          </Link>

          <Link
            href="/rs/temas/planejamento-vaga/modulo-1/aula-2"
            className="block bg-gray-100 px-4 py-3 rounded-lg hover:bg-gray-200"
          >
            Aula 2 — Acionar agente estratégico
          </Link>

        </div>

      </div>


      {/* CONTEÚDO */}

      <div className="flex-1 p-16 max-w-4xl">

        <h1 className="text-4xl font-bold mb-4">
          Planejamento da vaga
        </h1>

        <p className="text-gray-600 mb-10">
          Antes de abrir uma vaga, é essencial garantir que a necessidade
          esteja bem definida e alinhada com People. Nesta etapa você
          aprenderá como estruturar corretamente o início de um processo
          de recrutamento.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">

          <h3 className="font-semibold mb-3">
            🎯 Objetivo da etapa
          </h3>

          <p>
            Garantir que toda nova vaga comece com um alinhamento claro
            sobre necessidade, escopo da posição e contexto do time.
          </p>

        </div>

      </div>

    </div>
  );
}