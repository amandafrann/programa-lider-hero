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
            Planejamento da vaga
          </h1>

          <p className="text-gray-600 max-w-2xl">
            Antes de iniciar um processo seletivo, o líder deve garantir clareza
            sobre a necessidade da contratação e alinhar expectativas com People.
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
            Garantir que a abertura de uma nova vaga seja feita de forma
            estruturada e estratégica.
          </p>

          <p className="mb-4">
            Antes de abrir a vaga na Gupy, utilizamos a IA de People para
            organizar o contexto da posição e avaliar a real necessidade
            da contratação.
          </p>

          <p className="mb-2">
            Esse fluxo ajuda a:
          </p>

          <ul className="list-disc ml-6 space-y-1">

            <li>dar mais clareza sobre o objetivo da vaga</li>

            <li>evitar aberturas precipitadas</li>

            <li>alinhar expectativas com o time de People</li>

          </ul>

        </div>


        {/* QUANDO USAR */}

        <div className="bg-gray-50 border border-gray-200 p-6 rounded-xl mb-8">

          <h3 className="font-semibold mb-3">
            🧭 Quando essa etapa acontece
          </h3>

          <p className="mb-3">
            O planejamento da vaga deve acontecer sempre que houver
            necessidade de contratação.
          </p>

          <ul className="list-disc ml-6 space-y-1">

            <li>expansão do time</li>

            <li>substituição de um colaborador</li>

            <li>criação de uma nova função</li>

          </ul>

        </div>


        {/* PAPEL DO LÍDER */}

        <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-xl mb-8">

          <h3 className="font-semibold mb-4">
            👤 Papel do líder
          </h3>

          <p className="mb-4">
            O líder é o principal responsável pela definição da vaga.
            Cabe a ele garantir que a necessidade da contratação esteja
            clara antes de iniciar o processo.
          </p>

          <p className="mb-3">
            Isso inclui:
          </p>

          <ul className="list-disc ml-6 space-y-1">

            <li>
              trazer clareza sobre o contexto da vaga e o momento do time
            </li>

            <li>
              definir o escopo da posição e o impacto esperado da contratação
            </li>

            <li>
              garantir que as informações da vaga estejam bem estruturadas
              antes da abertura na Gupy
            </li>

          </ul>

        </div>


        {/* PROCESSO */}

        <div className="bg-gray-50 border border-gray-200 p-6 rounded-xl mb-8">

          <h3 className="font-semibold mb-4">
            ⚙️ Como executar
          </h3>

          <h4 className="font-medium mb-3">
            1. Utilizar a IA de People (Slack)
          </h4>

          <p className="mb-4">
            Antes de abrir a vaga, acesse o Chatbot de People no Slack.
          </p>

          <ol className="list-decimal ml-6 space-y-2 mb-6">

            <li>Acesse Slack → Apps → Chatbot de People</li>

            <li>Inicie a conversa digitando “Olá”</li>

            <li>Clique em <strong>Abertura de vaga</strong> ou digite 2</li>

            <li>Responda às perguntas do agente</li>

          </ol>

          <p className="mb-4">
            Ao final da conversa, você receberá um relatório estruturado da vaga.
          </p>

          <p className="mb-4">
            Esse relatório deve ser anexado na seção
            <strong> “Dados Internos – Justificativa”</strong> da Gupy
            ao abrir a requisição.
          </p>

        </div>


        {/* RELATÓRIO GERADO */}

        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-xl mb-8">

          <h3 className="font-semibold mb-4">
            📄 Informações geradas pelo relatório
          </h3>

          <ul className="list-disc ml-6 space-y-1">

            <li>Contexto da vaga</li>

            <li>Problema identificado</li>

            <li>Impacto de não abrir a vaga</li>

            <li>Objetivo com a nova contratação</li>

            <li>Alternativas que já foram avaliadas</li>

            <li>Perfil e escopo desejado (prévia)</li>

            <li>Expectativas de entregas para os primeiros 30/60 dias</li>

            <li>Métrica de sucesso</li>

            <li>Síntese automática do caso</li>

          </ul>

        </div>


        {/* RESULTADO */}

        <div className="bg-gray-100 p-6 rounded-xl">

          <h3 className="font-semibold mb-3">
            ✅ Resultado esperado
          </h3>

          <p>
            Uma vaga aberta com contexto claro, escopo bem definido
            e alinhamento entre liderança e People sobre a real
            necessidade da contratação.
          </p>

        </div>


      </div>

    </main>
  );
}