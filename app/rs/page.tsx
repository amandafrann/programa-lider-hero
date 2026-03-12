import LessonLayout from "@/app/components/LessonLayout";

export default function PlanejamentoPage() {
  return (
    <LessonLayout title="Planejamento da vaga">

      <p className="text-gray-600 mb-10">
        Antes de iniciar um processo seletivo, o líder deve garantir clareza
        sobre a necessidade da contratação e alinhar expectativas com People.
      </p>


      {/* OBJETIVO */}

      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg mb-8">

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

        <p>Esse fluxo ajuda a:</p>

        <ul className="list-disc ml-6 mt-2 space-y-1">

          <li>dar mais clareza sobre o objetivo da vaga</li>
          <li>evitar aberturas precipitadas</li>
          <li>alinhar expectativas com o time de People</li>

        </ul>

      </div>


      {/* PAPEL DO LÍDER */}

      <div className="bg-gray-50 p-6 rounded-lg mb-8">

        <h3 className="font-semibold mb-4">
          👤 Papel do líder
        </h3>

        <p className="mb-4">
          O líder é o principal responsável pela definição da vaga.
          Cabe a ele garantir que a necessidade da contratação esteja
          clara antes de iniciar o processo.
        </p>

        <p className="mb-4">
          Isso inclui:
        </p>

        <ul className="list-disc ml-6 space-y-1">

          <li>trazer clareza sobre o contexto da vaga e o momento do time</li>

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

      <div className="bg-gray-50 p-6 rounded-lg mb-8">

        <h3 className="font-semibold mb-4">
          📋 Processo
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
          <strong> “Dados Internos – Justificativa”</strong> da Gupy ao
          abrir a requisição.
        </p>

        <p className="mb-3">
          O relatório inclui:
        </p>

        <ul className="list-disc ml-6 space-y-1">

          <li>Contexto da vaga</li>
          <li>Problema identificado</li>
          <li>Impacto de não abrir a vaga</li>
          <li>Objetivo com a nova contratação</li>
          <li>Alternativas já avaliadas</li>
          <li>Perfil e escopo desejado (prévia)</li>
          <li>Expectativas de entregas para os primeiros 30/60 dias</li>
          <li>Métricas de sucesso</li>
          <li>Síntese automática do agente</li>

        </ul>

      </div>


      {/* BOAS PRÁTICAS */}

      <div className="bg-gray-50 p-6 rounded-lg mb-8">

        <h3 className="font-semibold mb-3">
          🧠 Boas práticas
        </h3>

        <ul className="list-disc ml-6 space-y-1">

          <li>Comece toda vaga pelo fluxo da IA de People</li>

          <li>Garanta clareza sobre o problema que a contratação resolve</li>

          <li>Evite abrir vagas sem alinhamento prévio</li>

          <li>Compartilhe o relatório gerado com People</li>

        </ul>

      </div>


      {/* O QUE EVITAR */}

      <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg mb-10">

        <h3 className="font-semibold mb-3">
          ⚠ O que evitar
        </h3>

        <ul className="list-disc ml-6 space-y-1">

          <li>Abrir vaga direto na Gupy sem passar pela IA</li>

          <li>Descrever vagas sem clareza de problema ou objetivo</li>

          <li>Iniciar processo seletivo sem alinhamento com People</li>

        </ul>

      </div>

    </LessonLayout>
  );
}