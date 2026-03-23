export default function AlinhamentoPage() {
  return (
    <div className="space-y-10">

      {/* INTRO */}
      <div>
        <p className="text-gray-700 text-lg leading-relaxed max-w-2xl">
          Após a aprovação da vaga, iniciamos o alinhamento com o time de R&S para garantir clareza total sobre o perfil, estratégia e expectativas da contratação.
        </p>
      </div>

      {/* O QUE ACONTECE */}
      <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">

        <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
          📌 O que acontece nesta etapa
        </h3>

        <div className="space-y-6 text-gray-700">

          <div>
            <p className="font-medium mb-2">Durante o alinhamento:</p>

            <ul className="list-disc ml-6 space-y-2">
              <li>Consolidamos o entendimento da vaga entre liderança e People</li>
              <li>Definimos a persona ideal para a posição</li>
              <li>Estruturamos a estratégia de busca no mercado</li>
            </ul>
          </div>

          <div>
            <p className="font-medium mb-2">Também alinhamos:</p>

            <ul className="list-disc ml-6 space-y-2">
              <li>Etapas do processo seletivo</li>
              <li>Critérios de avaliação</li>
              <li>Expectativas de prazo</li>
            </ul>
          </div>

        </div>

      </div>

      {/* O QUE TRAZER */}
      <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">

        <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
          👤 O que você precisa trazer
        </h3>

        <ul className="list-disc ml-6 space-y-3 text-gray-700">
          <li>Exemplos de perfis que fazem sentido para o cargo</li>
          <li>Clareza sobre a expectativa de entrega da nova posição</li>
          <li>Definição do perfil desejado (soft e hard skills)</li>
        </ul>

      </div>

      {/* RESULTADO */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-8">

        <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
          ✅ Resultado esperado
        </h3>

        <ul className="list-disc ml-6 space-y-3 text-gray-800">
          <li>Persona da vaga claramente definida</li>
          <li>Estratégia de busca estruturada</li>
          <li>Processo seletivo alinhado com People</li>
          <li>Vaga pronta para execução com qualidade</li>
        </ul>

      </div>

    </div>
  );
}