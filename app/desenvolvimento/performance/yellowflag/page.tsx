import LessonLayout from "@/app/components/LessonLayout";

export default function YellowFlagPage() {
  return (
    <LessonLayout title="Yellow Flag">

      <p className="text-gray-600 mb-10">
        A Yellow Flag é uma ferramenta utilizada na Hero para lidar com
        situações mais graves de comportamento ou performance. Ela
        estabelece um último alerta estruturado para que o colaborador
        compreenda claramente a necessidade de mudança e tenha a
        oportunidade de corrigir a rota.
      </p>


      {/* OBJETIVO */}

      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg mb-8">

        <h3 className="font-semibold mb-3">
          ⚡ Objetivo da etapa
        </h3>

        <p>
          Estruturar um plano de recuperação claro quando um comportamento
          ou desempenho está seriamente desalinhado com as expectativas da
          empresa, oferecendo uma oportunidade concreta de evolução antes
          de decisões mais críticas.
        </p>

      </div>


      {/* O QUE É */}

      <div className="bg-gray-50 p-6 rounded-lg mb-8">

        <h3 className="font-semibold mb-4">
          🚩 O que é a Yellow Flag
        </h3>

        <p className="mb-4">
          A Yellow Flag funciona como um alerta formal para situações que
          exigem mudança urgente de comportamento ou desempenho.
        </p>

        <p>
          Assim como no esporte, o cartão amarelo sinaliza um último aviso.
          Na Hero, ela indica que existe um desalinhamento relevante e que
          será necessário um plano de ação claro para recuperação.
        </p>

      </div>


      {/* QUANDO APLICAR */}

      <div className="bg-gray-50 p-6 rounded-lg mb-8">

        <h3 className="font-semibold mb-4">
          📌 Quando aplicar
        </h3>

        <p className="mb-4">
          A Yellow Flag deve ser utilizada apenas em situações mais graves,
          como:
        </p>

        <ul className="list-disc ml-6 space-y-2">

          <li>Violação de normas ou políticas da empresa</li>

          <li>Comportamentos incompatíveis com nossos valores</li>

          <li>Recorrência de práticas negativas já apontadas anteriormente</li>

          <li>Quebra relevante de conduta ética ou moral</li>

        </ul>

        <p className="mt-4 text-sm text-gray-600">
          Importante: Yellow Flag não deve ser utilizada para feedbacks
          comuns ou ajustes normais de performance.
        </p>

      </div>


      {/* COMO APLICAR */}

      <div className="bg-gray-50 p-6 rounded-lg mb-8">

        <h3 className="font-semibold mb-4">
          ⚙ Como aplicar
        </h3>

        <p className="mb-4">
          A aplicação da Yellow Flag deve sempre ser registrada através da
          plataforma Zazos.
        </p>

        <p className="text-gray-700">
          Caminho na plataforma:
        </p>

        <p className="font-medium mt-2">
          Desenvolvimento → Yellow Flag
        </p>

      </div>


      {/* O QUE ACONTECE DEPOIS */}

      <div className="bg-gray-50 p-6 rounded-lg mb-8">

        <h3 className="font-semibold mb-4">
          🔎 O que acontece após a aplicação
        </h3>

        <ul className="list-disc ml-6 space-y-2">

          <li>
            É definido um prazo de evolução, normalmente até 30 dias
          </li>

          <li>
            Um plano de ação claro é alinhado com metas e comportamentos
            esperados
          </li>

          <li>
            O líder acompanha o progresso através de conversas frequentes
            de acompanhamento
          </li>

          <li>
            A área de People pode apoiar o processo quando necessário
          </li>

        </ul>

      </div>


      {/* OBSERVAÇÕES */}

      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">

        <h3 className="font-semibold mb-3">
          ⚠ Observações importantes
        </h3>

        <ul className="list-disc ml-6 space-y-2">

          <li>
            A Yellow Flag é um último alerta, mas não garante permanência
            na empresa
          </li>

          <li>
            Não deve ser aplicada durante o período de experiência
          </li>

          <li>
            O acompanhamento consistente do líder é essencial para o
            sucesso da recuperação
          </li>

        </ul>

      </div>

    </LessonLayout>
  );
}