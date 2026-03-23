import Link from "next/link";

export default function PlanejamentoPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 flex justify-center pt-24 pb-24">

      <div className="max-w-4xl w-full px-8">

        {/* VOLTAR */}
        <Link
          href="/rs"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 mb-10 transition"
        >
          ← Voltar para R&S
        </Link>

        {/* HEADER */}
        <div className="mb-12">

          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-4">
            Pré-abertura da vaga: IA Chatbot de People
          </h1>

          <p className="text-gray-700 text-lg leading-relaxed max-w-2xl mb-6">
            Aprenda a utilizar a IA de People para planejar uma nova vaga.
          </p>

          {/* TEMPO */}
          <div className="inline-flex items-center gap-2 text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
            ⏱ 3 min de leitura
          </div>

        </div>

        {/* OBJETIVO */}
        <section className="mb-12">

          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            ⚡ Objetivo
          </h2>

          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">

            <p className="mb-4 text-gray-700">
              Antes de abrir a vaga na Gupy, todo líder deve utilizar a IA de People para organizar o contexto da posição e avaliar a real necessidade dessa nova contratação. Isso irá:
            </p>

            <ul className="list-disc ml-6 space-y-2 text-gray-700 mb-6">
              <li>Trazer clareza sobre o objetivo da função</li>
              <li>Evitar aberturas precipitadas</li>
              <li>Alinhar expectativas com o time de People</li>
            </ul>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 text-sm text-gray-800">
              <strong>⚠️ Importante:</strong> Essa etapa acontece sempre que houver necessidade de contratação.
            </div>

          </div>

        </section>

        <hr className="border-gray-200 my-10" />

        {/* PAPEL DO LÍDER */}
        <section className="mb-12">

          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            👤 Papel do líder
          </h2>

          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">

            <ul className="list-disc ml-6 space-y-3 text-gray-700">
              <li>Oferecer clareza sobre o contexto da vaga e o momento do time</li>
              <li>Definição objetiva do escopo e do impacto esperado</li>
              <li>Garantir qualidade das informações antes da abertura</li>
            </ul>

          </div>

        </section>

        <hr className="border-gray-200 my-10" />

        {/* COMO EXECUTAR */}
        <section className="mb-12">

          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            ⚙️ Como executar
          </h2>

          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">

            <ol className="list-decimal ml-6 space-y-3 mb-6 text-gray-700">
              <li>Acesse Slack → Apps → Chatbot de People</li>
              <li>Inicie a conversa digitando “Olá”</li>
              <li>Clique em <strong>Abertura de vaga</strong></li>
              <li>Responda às perguntas da IA</li>
            </ol>

            <p className="mb-6 text-gray-700">
              Ao final, você receberá um relatório estruturado da vaga.
            </p>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 text-sm text-gray-800 mb-6">
              <strong>⚠️ Importante:</strong> Anexe o relatório na Gupy (Dados Internos).
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-4">

              <h4 className="font-medium mb-3 text-gray-900">
                📄 Informações geradas:
              </h4>

              <ul className="list-disc ml-6 space-y-2 text-sm text-gray-700">
                <li>Contexto da vaga</li>
                <li>Problema identificado</li>
                <li>Impacto de não abrir</li>
                <li>Objetivo da contratação</li>
                <li>Alternativas avaliadas</li>
                <li>Perfil desejado</li>
                <li>Expectativas 30/60 dias</li>
                <li>Métrica de sucesso</li>
                <li>Síntese automática</li>
              </ul>

            </div>

          </div>

        </section>

        <hr className="border-gray-200 my-10" />

        {/* RESULTADO */}
        <section>

          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            ✅ Resultado esperado
          </h2>

          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">

            <ul className="list-disc ml-6 space-y-3 text-gray-700">
              <li>Contexto claro e alinhamento com People</li>
              <li>Vagas abertas corretamente via Gupy</li>
              <li>Redução de retrabalho</li>
            </ul>

          </div>

        </section>

      </div>

    </main>
  );
}