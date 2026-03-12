import Link from "next/link";

export default function Aula2() {
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
          Aula 2 — Alinhamento da vaga com People
        </h1>

        <p className="text-gray-400">
          ⏱ Tempo estimado: 5 minutos
        </p>

        {/* Progresso da trilha */}

        <div>
          <p className="text-sm text-gray-400 mb-2">
            Progresso da trilha
          </p>

          <div className="w-full bg-zinc-800 rounded-full h-2">
            <div className="bg-white h-2 rounded-full w-2/4"></div>
          </div>

          <p className="text-sm text-gray-400 mt-1">
            50% concluído
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-2">
            Responsabilidade do líder
          </h2>
          <p>
            Garantir que a necessidade da vaga esteja alinhada com People
            antes da abertura no sistema de recrutamento.
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-2">
            Passo a passo
          </h2>

          <ol className="list-decimal ml-5 space-y-2">
            <li>Explique o contexto da vaga para People</li>
            <li>Defina responsabilidades principais</li>
            <li>Alinhe perfil técnico e comportamental</li>
            <li>Valide o nível da posição</li>
          </ol>
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-2">
            Expectativa de People
          </h2>
          <p>
            Que o líder traga clareza sobre o problema que a vaga resolve
            e o perfil necessário para a contratação.
          </p>
        </div>

        <div className="flex justify-between">

          <Link
            href="/rs/temas/planejamento-vaga"
            className="text-gray-400 hover:text-white"
          >
            ← Aula anterior
          </Link>

          <Link
            href="/modulo-2"
            className="bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-200"
          >
            Ir para Módulo 2 →
          </Link>

        </div>

      </div>
    </main>
  );
}