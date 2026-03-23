export default function AlinhamentoPage() {
  return (
    <>
      <p className="text-gray-600 mb-10">
        Após a aprovação da vaga, acontece o alinhamento com o time de R&S.
      </p>

      {/* O QUE ACONTECE */}
      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg mb-8">
        <h3 className="font-semibold mb-3">📌 O que acontece nesta etapa</h3>

        <p className="mb-3">
          Neste momento vamos:
        </p>

        <ul className="list-disc ml-6 space-y-1 mb-4">
          <li>Consolidar o entendimento da vaga entre Liderança e People</li>
          <li>Definir a persona ideal</li>
          <li>Estruturar a estratégia de busca no mercado</li>
        </ul>

        <p className="mb-2">
          Também alinhamos:
        </p>

        <ul className="list-disc ml-6 space-y-1">
          <li>Etapas do processo seletivo</li>
          <li>Critérios de avaliação</li>
          <li>Expectativas de prazo</li>
        </ul>
      </div>

      {/* O QUE LEVAR */}
      <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg mb-8">
        <h3 className="font-semibold mb-4">👤 O que você precisa trazer</h3>

        <ul className="list-disc ml-6 space-y-1">
          <li>Exemplos de perfis que fazem sentido para o cargo</li>
          <li>Clareza sobre a expectativa de entrega da nova posição</li>
          <li>Clareza do perfil desejado (soft e hard skills)</li>
        </ul>
      </div>

      {/* RESULTADO */}
      <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
        <h3 className="font-semibold mb-3">✅ O que esperar ao final</h3>

        <ul className="list-disc ml-6 space-y-1">
          <li>Persona da vaga definida</li>
          <li>Estratégia de busca estruturada</li>
          <li>Processo seletivo alinhado</li>
          <li>Vaga publicada</li>
        </ul>
      </div>
    </>
  );
}