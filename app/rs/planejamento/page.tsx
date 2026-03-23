import Link from "next/link";

export default function PlanejamentoPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 flex justify-center pt-24 pb-24">

      <div className="max-w-4xl w-full px-8">

        {/* VOLTAR */}
        <Link
          href="/rs"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 mb-10 transition"
        >
          ← Voltar para R&S
        </Link>

        {/* HEADER */}
        <div className="mb-12">

          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-4">
            Pré-abertura da vaga: IA Chatbot de People
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mb-6">
            <span className="font-semibold text-gray-900"></span>Aprenda a utilizar a IA de People para planejar uma nova vaga.</span>
          </p>

          {/* TEMPO */}
          <div className="inline-flex items-center gap-2 text-sm bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
            ⏱ 3 min de leitura
          </div>

        </div>

        {/* ===================== */}
        {/* OBJETIVO (PRINCIPAL) */}
        {/* ===================== */}

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

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 text-sm">
              <strong>⚠️ Importante:</strong> Essa etapa acontece sempre que houver necessidade de contratação (expansão, substituição ou criação de nova função).
            </div>

          </div>

        </section>

        <hr className="border-gray-200 my-10" />

        {/* ===================== */}
        {/* PAPEL DO LÍDER */}
        {/* ===================== */}

        <section className="mb-12">

          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            👤 Papel do líder
          </h2>

          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">

            <ul className="list-disc ml-6 space-y-3 text-gray-700">
              <li>Oferecer clareza sobre o contexto da vaga e o momento do time</li>
              <li>Definição objetiva do escopo e do impacto esperado dessa contratação</li>
              <li>Garantir qualidade e estrutura das informações antes da abertura na Gupy</li>
            </ul>

          </div>

        </section>

        <hr className="border-gray-200 my-10" />

        {/* ===================== */}
        {/* COMO EXECUTAR */}
        {/* ===================== */}

        <section className="mb-12">

          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            ⚙️ Como executar
          </h2>

          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">

            <ol className="list-decimal ml-6 space-y-3 mb-6 text-gray-700">
              <li>Acesse Slack → Apps → Chatbot de People</li>
              <li>Inicie a conversa digitando “Olá”</li>
              <li>Clique em <strong>Abertura de vaga</strong> ou digite 2</li>
              <li>Responda às perguntas da IA</li>
            </ol>

            <p className="mb-6 text-gray-700">
              Ao final da conversa, você receberá um relatório estruturado da vaga.
            </p>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 text-sm mb-6">
              <strong>⚠️ Importante:</strong> Esse relatório deve ser anexado na seção{" "}
              <strong>“Dados Internos – Justificativa”</strong> da Gupy ao abrir a requisição.
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-4">

              <h4 className="font-medium mb-3">
                📄 Informações geradas pelo relatório:
              </h4>

              <ul className="list-disc ml-6 space-y-2 text-sm text-gray-700">
                <li>Contexto da vaga</li>
                <li>Problema identificado</li>
                <li>Impacto de não abrir a vaga</li>
                <li>Objetivo da nova contratação</li>
                <li>Alternativas já avaliadas</li>
                <li>Perfil e escopo desejado (prévia)</li>
                <li>Expectativas para os primeiros 30/60 dias</li>
                <li>Métrica de sucesso</li>
                <li>Síntese automática do caso</li>
              </ul>

            </div>

          </div>

        </section>

        <hr className="border-gray-200 my-10" />

        {/* ===================== */}
        {/* RESULTADO */}
        {/* ===================== */}

        <section>

          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            ✅ Resultado esperado
          </h2>

          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">

            <ul className="list-disc ml-6 space-y-3 text-gray-700">
              <li>Garantir contexto claro, escopo bem definido e alinhamento entre liderança e People</li>
              <li>100% das vagas abertas corretamente via Gupy</li>
              <li>Redução de retrabalho (rebriefing) e/ou recusas por falta de informação</li>
            </ul>

          </div>

        </section>

      </div>

    </main>
  );
}