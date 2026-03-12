export default function AlinhamentoPage() {
  return (
    <>
      <p className="text-gray-600 mb-10">
        Após a aprovação da vaga acontece o alinhamento com o time de R&S.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg mb-8">
        <h3 className="font-semibold mb-3">📌 O que acontece nesta etapa</h3>

        <ul className="list-disc ml-6 space-y-1">
          <li>consolidar o entendimento da vaga</li>
          <li>definir a persona ideal</li>
          <li>estruturar estratégia de busca</li>
          <li>definir etapas do processo seletivo</li>
          <li>definir critérios de avaliação</li>
          <li>alinhar expectativas de prazo</li>
        </ul>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h3 className="font-semibold mb-4">👤 O que você precisa trazer</h3>

        <ul className="list-disc ml-6 space-y-1">
          <li>exemplos de perfis que fazem sentido</li>
          <li>clareza sobre expectativa de entrega da posição</li>
          <li>clareza sobre soft e hard skills desejadas</li>
        </ul>
      </div>
    </>
  );
}