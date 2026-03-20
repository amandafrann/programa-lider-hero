import Link from "next/link";

export default function PlanejamentoPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex justify-center py-20">

      <div className="max-w-4xl w-full px-8">

        {/* VOLTAR */}

        <Link
          href="/rs"
          className="text-gray-500 hover:text-gray-800 mb-8 inline-block"
        >
          ← Voltar para R&S
        </Link>


        {/* HEADER */}

        <div className="mb-12">

          <h1 className="text-4xl font-bold mb-4">
            Pré-abertura da vaga: IA Chatbot de People
          </h1>

          <p className="text-gray-600 max-w-2xl">
            Antes de abrir a vaga na Gupy, utilizamos a IA de People para organizar o contexto da posição e avaliar a real necessidade dessa nova contratação.
          </p>

          <p className="text-sm text-gray-400 mt-3">
            ⏱ Tempo de leitura: 3 min
          </p>

        </div>


        {/* OBJETIVO */}

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-xl mb-8">

          <h3 className="font-semibold mb-3">
            ⚡ Objetivo da etapa
          </h3>

          <p className="mb-4">
            Garantir que a abertura de uma nova vaga seja feita de forma estruturada e estratégica.
          </p>

          <p className="mb-3">
            Para isso, antes de abrir a vaga na Gupy, utilize a IA de People para:
          </p>

          <ul className="list-disc ml-6 space-y-1 mb-4">

            <li>Trazer clareza sobre o objetivo da função</li>

            <li>Evitar aberturas precipitadas</li>

            <li>Alinhar expectativas com o time de People</li>

          </ul>

          {/* IMPORTANTE DENTRO DO OBJETIVO */}

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-sm">

            <strong>⚠️ Importante:</strong> Essa etapa acontece sempre que houver necessidade de contratação (expansão, substituição ou criação de nova função).

          </div>

        </div>


        {/* PAPEL DO LÍDER */}

        <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-xl mb-8">

          <h3 className="font-semibold mb-4">
            👤 Papel do líder
          </h3>

          <ul className="list-disc ml-6 space-y-2">

            <li>Clareza sobre o contexto da vaga e o momento do time</li>

            <li>Definição objetiva do escopo e do impacto esperado da contratação</li>

            <li>Garantir qualidade e estrutura das informações antes da abertura na Gupy</li>

          </ul>

        </div>


        {/* COMO EXECUTAR */}

        <div className="bg-gray-50 border border-gray-200 p-6 rounded-xl mb-8">

          <h3 className="font-semibold mb-4">
            ⚙️ Como executar
          </h3>

          <ol className="list-decimal ml-6 space-y-2 mb-6">

            <li>Acesse Slack → Apps → Chatbot de People</li>

            <li>Inicie a conversa digitando “Olá”</li>

            <li>Clique em <strong>Abertura de vaga</strong> ou digite 2</li>

            <li>Responda às perguntas da IA</li>

          </ol>

          <p className="mb-4">
            Ao final da conversa, você receberá um relatório estruturado da vaga.
          </p>

          {/* IMPORTANTE */}

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-sm mb-6">

            <strong>⚠️ Importante:</strong> Esse relatório deve ser anexado na seção{" "}
            <strong>“Dados Internos – Justificativa”</strong> da Gupy ao abrir a requisição.

          </div>

          {/* INFORMAÇÕES DO RELATÓRIO */}

          <div className="bg-green-50 border border-green-200 rounded-lg p-4">

            <h4 className="font-medium mb-3">
              📄 Informações geradas pelo relatório:
            </h4>

            <ul className="list-disc ml-6 space-y-1 text-sm">

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


        {/* RESULTADO */}

        <div className="bg-gray-100 p-6 rounded-xl">

          <h3 className="font-semibold mb-3">
            ✅ Resultado esperado
          </h3>

          <ul className="list-disc ml-6 space-y-2">

            <li>
              Garantir contexto claro, escopo bem definido e alinhamento entre liderança e People
            </li>

            <li>
              100% das vagas abertas corretamente via Gupy
            </li>

            <li>
              Redução de retrabalho (rebriefing) e/ou recusas por falta de informação
            </li>

          </ul>

        </div>


      </div>

    </main>
  );
}