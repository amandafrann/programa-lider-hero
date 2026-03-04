import Link from "next/link";

export default function Aula1() {
  return (
    <main className="min-h-screen bg-black text-white flex justify-center py-20">
      <div className="max-w-3xl space-y-10">

        <Link
          href="/modulo-1"
          className="text-gray-400 hover:text-white"
        >
          ← Voltar para Módulo 1
        </Link>

        <h1 className="text-4xl font-bold">
          Aula 1 — Acionar Agente Estratégico (Slack)
        </h1>

        <p className="text-gray-400">
          ⏱ Tempo estimado: 2 minutos
        </p>

        {/* Progresso da trilha */}

        <div>
          <p className="text-sm text-gray-400 mb-2">
            Progresso da trilha
          </p>

          <div className="w-full bg-zinc-800 rounded-full h-2">
            <div className="bg-white h-2 rounded-full w-1/4"></div>
          </div>

          <p className="text-sm text-gray-400 mt-1">
            25% concluído
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-2">
            Responsabilidade do líder
          </h2>
          <p>
            Garantir que toda nova necessidade de contratação comece pelo
            acionamento do Agente Estratégico no Slack.
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-2">
            Passo a passo
          </h2>

          <ol className="list-decimal ml-5 space-y-2">
            <li>Acesse o Slack</li>
            <li>Acione o Agente Estratégico</li>
            <li>Informe área, cargo e motivo da vaga</li>
            <li>Aguarde retorno de People</li>
          </ol>
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-2">
            Expectativa de People
          </h2>
          <p>
            Todas as vagas devem começar via Agente Estratégico para garantir
            alinhamento inicial e evitar retrabalho.
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-2">
            Métricas de sucesso
          </h2>

          <ul className="list-disc ml-5 space-y-2">
            <li>100% das vagas iniciadas via Agente Estratégico</li>
            <li>Redução de retrabalho na definição da vaga</li>
            <li>Menor tempo entre necessidade e abertura da vaga</li>
          </ul>
        </div>

        <div className="flex justify-end">
          <Link
            href="/modulo-1/aula-2"
            className="bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-200"
          >
            Próxima aula →
          </Link>
        </div>

      </div>
    </main>
  );
}