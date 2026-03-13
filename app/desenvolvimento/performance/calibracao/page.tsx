title="Calibração Hero"
import LessonLayout from "@/app/components/LessonLayout";

export default function CalibracaoPage() {
  return (
    <LessonLayout
      title="Calibração"
      description="Ritual semestral da Hero que garante alinhamento entre líderes nas avaliações de performance."
    >

      <p className="text-gray-600 mb-10">
        A Calibração é um ritual semestral da Hero que transforma avaliações
        de performance em decisões estratégicas sobre pessoas. O objetivo é
        garantir justiça, consistência entre áreas e planos claros de
        desenvolvimento para cada colaborador.
      </p>

      {/* OBJETIVO */}

      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg mb-8">
        <h3 className="font-semibold mb-3">
          ⚡ Objetivo da etapa
        </h3>

        <p>
          Garantir decisões consistentes sobre talentos da empresa,
          alinhando líderes e áreas para identificar riscos, reconhecer
          talentos estratégicos e definir planos claros de desenvolvimento.
        </p>
      </div>


      {/* ROTAS DE DESENVOLVIMENTO */}

      <div className="bg-gray-50 p-6 rounded-lg mb-8">

        <h3 className="font-semibold mb-4">
          🧭 Rotas de desenvolvimento
        </h3>

        <p className="mb-4">
          Durante a calibração, cada colaborador é enquadrado em uma
          rota de desenvolvimento que representa seu momento atual
          na função.
        </p>

        <ul className="list-disc ml-6 space-y-2">

          <li>
            <strong>Recuperação:</strong> desempenho inconsistente ou
            desalinhado com os desafios da função.
          </li>

          <li>
            <strong>Equilíbrio:</strong> performance consistente e alinhada
            às expectativas da posição.
          </li>

          <li>
            <strong>Aceleração:</strong> performance acima das expectativas,
            com alto impacto no negócio.
          </li>

          <li>
            <strong>Período de experiência:</strong> início recente na função,
            ainda em fase de adaptação.
          </li>

        </ul>

      </div>


      {/* COMO FUNCIONA */}

      <div className="bg-gray-50 p-6 rounded-lg mb-8">

        <h3 className="font-semibold mb-4">
          ⚙ Como funciona o processo
        </h3>

        <p className="mb-4">
          O processo de calibração acontece duas vezes por ano
          e é dividido em quatro etapas principais:
        </p>

        <ol className="list-decimal ml-6 space-y-2">

          <li>
            <strong>Relatório do gestor:</strong> líderes analisam
            a trajetória e performance de cada pessoa do time.
          </li>

          <li>
            <strong>Triagem:</strong> líderes e Business Partners
            selecionam quais casos precisam ser discutidos.
          </li>

          <li>
            <strong>Reunião de calibração:</strong> discussão dos casos
            selecionados para alinhar decisões entre áreas.
          </li>

          <li>
            <strong>Devolutivas:</strong> líderes realizam 1:1s com
            colaboradores para compartilhar resultados e próximos passos.
          </li>

        </ol>

      </div>


      {/* PAPEL DO LÍDER */}

      <div className="bg-gray-50 p-6 rounded-lg mb-8">

        <h3 className="font-semibold mb-4">
          👤 Papel do líder
        </h3>

        <ul className="list-disc ml-6 space-y-2">

          <li>Refletir com profundidade sobre a performance do time</li>

          <li>Registrar avaliações claras e baseadas em fatos</li>

          <li>Propor planos de desenvolvimento para cada pessoa</li>

          <li>Conduzir devolutivas transparentes com o time</li>

        </ul>

      </div>


      {/* RESULTADO ESPERADO */}

      <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg mb-10">

        <h3 className="font-semibold mb-3">
          🎯 Resultado esperado
        </h3>

        <p>
          Uma calibração bem feita garante que talentos estratégicos
          sejam identificados, riscos operacionais sejam mapeados e
          existam planos claros de desenvolvimento para cada pessoa
          da organização.
        </p>

      </div>

    </LessonLayout>
  );
}