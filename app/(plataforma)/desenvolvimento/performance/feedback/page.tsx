import LessonLayout from "@/app/components/LessonLayout";

export default function FeedbackPage() {
  return (
    <LessonLayout
      title="Feedback"
      backLink="/desenvolvimento"
      sectionTitle="Gestão de Performance"
      lessons={[
        {
          name: "Feedback",
          path: "/desenvolvimento/performance/feedback",
        },
        {
          name: "Pulso",
          path: "/desenvolvimento/performance/pulso",
        },
        {
          name: "Calibração",
          path: "/desenvolvimento/performance/calibracao",
        },
        {
          name: "1:1",
          path: "/desenvolvimento/performance/one-on-one",
        },
        {
          name: "Yellow Flag",
          path: "/desenvolvimento/performance/yellow-flag",
        },
      ]}
    >

      <p className="text-gray-600 mb-10">
        Feedback é uma das ferramentas mais importantes de liderança.
        Ele permite alinhar expectativas, corrigir desvios rapidamente
        e desenvolver pessoas continuamente dentro do time.
      </p>

      {/* OBJETIVO */}

      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg mb-8">
        <h3 className="font-semibold mb-3">⚡ Objetivo da etapa</h3>

        <p>
          Garantir que líderes saibam dar e receber feedbacks claros,
          construtivos e acionáveis para desenvolver pessoas e melhorar
          continuamente a performance do time.
        </p>
      </div>

      {/* PAPEL DO LÍDER */}

      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h3 className="font-semibold mb-4">👤 Papel do líder</h3>

        <ul className="list-disc ml-6 space-y-1">
          <li>Observar comportamentos e resultados do time</li>
          <li>Dar feedbacks próximos ao momento em que ocorrem</li>
          <li>Criar ambiente seguro para conversas abertas</li>
          <li>Pedir feedback sobre sua própria atuação</li>
        </ul>
      </div>

      {/* QUANDO DAR FEEDBACK */}

      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h3 className="font-semibold mb-4">📍 Quando dar feedback</h3>

        <p className="mb-4">
          Existem dois momentos principais para feedback:
        </p>

        <ul className="list-disc ml-6 space-y-2">

          <li>
            <strong>Feedback imediato:</strong> logo após um comportamento
            observado (ex: desalinhamento em reunião, colaboração positiva,
            problema de comunicação).
          </li>

          <li>
            <strong>Ciclos formais de performance:</strong> momentos
            estruturados ao longo do ano para consolidar avaliação
            de performance e evolução do colaborador.
          </li>

        </ul>
      </div>

      {/* COMO DAR FEEDBACK */}

      <div className="bg-gray-50 p-6 rounded-lg mb-8">

        <h3 className="font-semibold mb-4">
          📋 Como dar feedback
        </h3>

        <p className="mb-4">
          Na Hero utilizamos a estrutura <strong>SBI + Action Point</strong>.
        </p>

        <ol className="list-decimal ml-6 space-y-2">

          <li><strong>Situação:</strong> explique quando e onde aconteceu.</li>

          <li><strong>Comportamento:</strong> descreva o comportamento observado.</li>

          <li><strong>Impacto:</strong> explique qual foi o impacto.</li>

          <li><strong>Action Point:</strong> alinhe o que deve acontecer a partir de agora.</li>

        </ol>

      </div>

      {/* COMO PEDIR FEEDBACK */}

      <div className="bg-gray-50 p-6 rounded-lg mb-8">

        <h3 className="font-semibold mb-4">
          💬 Como pedir feedback
        </h3>

        <ol className="list-decimal ml-6 space-y-2">

          <li>Peça explicitamente o feedback.</li>

          <li>Confirme que entendeu o que foi dito.</li>

          <li>Agradeça pela transparência.</li>

          <li>Defina uma ação clara caso concorde com o feedback.</li>

        </ol>

      </div>

      {/* BOAS PRÁTICAS */}

      <div className="bg-gray-50 p-6 rounded-lg mb-8">

        <h3 className="font-semibold mb-3">
          🧠 Boas práticas
        </h3>

        <ul className="list-disc ml-6 space-y-1">

          <li>Seja específico e baseado em fatos</li>
          <li>Dê feedback próximo ao acontecimento</li>
          <li>Demonstre intenção de desenvolvimento</li>
          <li>Crie espaço para que o time também dê feedback</li>

        </ul>

      </div>

      {/* O QUE EVITAR */}

      <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg mb-10">

        <h3 className="font-semibold mb-3">
          ⚠ O que evitar
        </h3>

        <ul className="list-disc ml-6 space-y-1">

          <li>Dar feedback crítico por Slack ou e-mail</li>
          <li>Julgar personalidade</li>
          <li>Usar generalizações como “você sempre…”</li>
          <li>Guardar feedback por muito tempo</li>

        </ul>

      </div>

    </LessonLayout>
  );
}