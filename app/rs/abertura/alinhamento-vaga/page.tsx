import LessonLayout from "@/app/components/LessonLayout";

export default function AlinhamentoPage() {
  return (
    <LessonLayout title="Alinhamento com R&S">

      <p className="text-gray-600 mb-10">
        Após a aprovação da vaga, acontece o alinhamento com o time de R&S.
        Nesse momento estruturamos a estratégia do processo seletivo.
      </p>


      {/* O QUE ACONTECE */}

      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg mb-8">

        <h3 className="font-semibold mb-3">
          ⚡ O que acontece nesta etapa
        </h3>

        <ul className="list-disc ml-6 space-y-1">

          <li>consolidar entendimento da vaga</li>

          <li>definir a persona ideal</li>

          <li>estruturar estratégia de busca no mercado</li>

        </ul>

        <p className="mt-4 mb-2 font-medium">
          Também definimos:
        </p>

        <ul className="list-disc ml-6 space-y-1">

          <li>etapas do processo seletivo</li>

          <li>critérios de avaliação</li>

          <li>expectativas de prazo</li>

        </ul>

      </div>


      {/* O QUE TRAZER */}

      <div className="bg-gray-50 p-6 rounded-lg mb-8">

        <h3 className="font-semibold mb-4">
          📋 O que você precisa trazer
        </h3>

        <ul className="list-disc ml-6 space-y-2">

          <li>exemplos de perfis que fazem sentido</li>

          <li>clareza sobre a expectativa de entrega da posição</li>

          <li>clareza sobre soft e hard skills desejadas</li>

        </ul>

        <p className="mt-4">
          Para aprofundar esse tema:
        </p>

        <a
          href="https://www.notion.so/Como-garantir-um-alinhamento-de-vaga-bem-sucedido-24852622d2198022827cf4d6f738c68c?pvs=21"
          target="_blank"
          className="text-blue-600 underline"
        >
          Como garantir um alinhamento de vaga bem-sucedido
        </a>

      </div>


      {/* RESULTADO */}

      <div className="bg-gray-50 p-6 rounded-lg mb-8">

        <h3 className="font-semibold mb-4">
          🎯 O que esperar
        </h3>

        <ul className="list-disc ml-6 space-y-1">

          <li>persona da vaga definida</li>

          <li>estratégia de busca estruturada</li>

          <li>processo seletivo alinhado</li>

          <li>vaga publicada</li>

        </ul>

        <p className="mt-4">
          Para entender mais sobre o papel de People durante o processo:
        </p>

        <a
          href="https://www.notion.so/O-esperar-de-People-durante-o-Processo-Seletivo-24852622d219806ba324c6df31546349?pvs=21"
          target="_blank"
          className="text-blue-600 underline"
        >
          O esperar de People durante o processo seletivo
        </a>

      </div>

    </LessonLayout>
  );
}