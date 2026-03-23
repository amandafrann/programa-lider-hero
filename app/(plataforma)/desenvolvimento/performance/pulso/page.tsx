import LessonLayout from "@/app/components/LessonLayout";

export default function PulsoPage() {
  return (
    <LessonLayout title="Pulso">

      <p className="text-gray-600 mb-10">
        O Pulso é uma avaliação rápida de performance realizada a cada dois meses
        na Hero. Ele permite acompanhar a evolução das pessoas e identificar
        oportunidades de desenvolvimento de forma contínua.
      </p>

      {/* OBJETIVO */}

      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg mb-8">
        <h3 className="font-semibold mb-3">⚡ Objetivo da etapa</h3>

        <p>
          Criar um mecanismo frequente de avaliação que permita acompanhar
          performance, gerar feedbacks estruturados e apoiar decisões de
          desenvolvimento das pessoas.
        </p>
      </div>


      {/* O QUE É O PULSO */}

      <div className="bg-gray-50 p-6 rounded-lg mb-8">

        <h3 className="font-semibold mb-4">
          📍 O que é o Pulso
        </h3>

        <p className="mb-4">
          O Pulso é uma avaliação bimestral realizada entre líderes e liderados
          para refletir sobre a performance recente dentro da área.
        </p>

        <ul className="list-disc ml-6 space-y-2">

          <li>Acontece a cada 2 meses</li>

          <li>Leva cerca de 15–20 minutos para responder</li>

          <li>Gera insumos para feedbacks e desenvolvimento</li>

        </ul>

      </div>


      {/* QUEM AVALIA QUEM */}

      <div className="bg-gray-50 p-6 rounded-lg mb-8">

        <h3 className="font-semibold mb-4">
          👤 Quem avalia quem
        </h3>

        <ul className="list-disc ml-6 space-y-2">

          <li>
            <strong>Líder → Liderado:</strong> avalia entregas, protagonismo e cultura
          </li>

          <li>
            <strong>Liderado → Líder:</strong> avalia clareza nos direcionamentos,
            protagonismo e cultura
          </li>

        </ul>

      </div>


      {/* CRITÉRIOS */}

      <div className="bg-gray-50 p-6 rounded-lg mb-8">

        <h3 className="font-semibold mb-4">
          📊 Critérios de avaliação
        </h3>

        <p className="mb-4">
          As avaliações consideram três dimensões principais de performance:
        </p>

        <ul className="list-disc ml-6 space-y-2">

          <li>
            <strong>Entregas:</strong> qualidade, volume e impacto das entregas
          </li>

          <li>
            <strong>Protagonismo:</strong> iniciativa, responsabilidade e capacidade
            de gerar impacto
          </li>

          <li>
            <strong>Cultura:</strong> alinhamento com os valores e comportamentos
            esperados da empresa
          </li>

        </ul>

      </div>


      {/* COMO AVALIAR */}

      <div className="bg-gray-50 p-6 rounded-lg mb-8">

        <h3 className="font-semibold mb-4">
          🧠 Como avaliar bem
        </h3>

        <ul className="list-disc ml-6 space-y-2">

          <li>Baseie-se em fatos observáveis</li>

          <li>Considere apenas o período avaliado</li>

          <li>Evite avaliações baseadas em percepção isolada</li>

          <li>Use exemplos concretos para apoiar sua avaliação</li>

        </ul>

      </div>


      {/* RESULTADO */}

      <div className="bg-gray-50 p-6 rounded-lg mb-8">

        <h3 className="font-semibold mb-4">
          🔁 O que acontece depois
        </h3>

        <p className="mb-4">
          Os resultados do Pulso são utilizados para apoiar:
        </p>

        <ul className="list-disc ml-6 space-y-2">

          <li>Conversas de feedback</li>

          <li>Planos de desenvolvimento</li>

          <li>Processos de calibração</li>

          <li>Decisões de gestão de performance</li>

        </ul>

      </div>


      {/* FERRAMENTA */}

      <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg mb-10">

        <h3 className="font-semibold mb-3">
          📊 Onde acompanhar resultados
        </h3>

        <p>
          Os resultados do Pulso podem ser consultados na plataforma Zazos,
          onde líderes conseguem visualizar avaliações feitas, avaliações
          recebidas e conduzir conversas de feedback com seus liderados.
        </p>

      </div>

    </LessonLayout>
  );
}