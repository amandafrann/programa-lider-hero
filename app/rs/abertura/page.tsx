import Link from "next/link";

export default function AberturaPage() {
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


        {/* TÍTULO */}

        <h1 className="text-4xl font-bold mb-4">
          Abrir vaga na Gupy
        </h1>

        <p className="text-gray-600 mb-10">
          Após utilizar a IA de People para estruturar a vaga, o próximo passo é
          realizar a abertura da requisição na Gupy.
        </p>



        {/* PROCESSO */}

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg mb-8">

          <h3 className="font-semibold mb-4">
            📋 Processo
          </h3>

          <ol className="list-decimal ml-6 space-y-2">

            <li>Acesse <strong>Gestão de vagas</strong></li>

            <li>Clique em <strong>Criar nova vaga</strong></li>

            <li>
              Selecione o template correspondente:
            </li>

            <ul className="list-disc ml-6">

              <li>modelo de contratação (CLT ou PJ)</li>
              <li>senioridade da posição</li>

            </ul>

          </ol>

          <p className="mt-4">
            <strong>
              Os demais campos serão preenchidos automaticamente pelo template.
            </strong>
          </p>

          <p className="mt-4">
            Depois disso, anexe o relatório gerado pela IA
            na seção de justificativa da vaga.
          </p>

        </div>



        {/* MATERIAL DE APOIO */}

        <div className="bg-gray-50 p-6 rounded-lg mb-8">

          <h3 className="font-semibold mb-3">
            📎 Material de apoio
          </h3>

          <p className="mb-3">
            Para consultar o passo a passo detalhado da abertura de vaga,
            acesse o POP interno da Hero.
          </p>

          <a
            href="https://www.notion.so/POP-Hero-Abertura-de-Requisi-o-de-Vaga-142ee12f65d7410cae1cf99907a8e0d1?pvs=21"
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            POP Hero | Abertura de Requisição de Vaga
          </a>

        </div>



        {/* COMPORTAMENTAL */}

        <div className="bg-gray-50 p-6 rounded-lg mb-8">

          <h3 className="font-semibold mb-3">
            🧠 Comportamental
          </h3>

          <ul className="list-disc ml-6 space-y-2">

            <li>
              Utilizar a IA de People antes de iniciar a requisição na Gupy.
            </li>

            <li>
              Consultar o material do fluxo de abertura sempre que necessário.
            </li>

            <li>
              Trazer clareza sobre o contexto da vaga e o momento do time.
            </li>

            <li>
              Estar disponível para alinhar expectativas e realizar ajustes
              quando necessário.
            </li>

          </ul>

          <p className="mt-4 text-gray-600">
            Ter clareza sobre esses pontos ajuda a tornar o processo mais
            estratégico e assertivo.
          </p>

        </div>



        {/* PAPEL DO RH */}

        <div className="bg-gray-50 p-6 rounded-lg mb-8">

          <h3 className="font-semibold mb-3">
            👥 Papel do RH
          </h3>

          <p className="mb-4">
            Durante a abertura da vaga, o time de People é responsável por
            garantir que a requisição esteja alinhada com o contexto da empresa
            e as prioridades do negócio.
          </p>

          <p className="mb-3">
            Isso inclui revisar a requisição considerando:
          </p>

          <ul className="list-disc ml-6 space-y-1">

            <li>contexto da área</li>

            <li>justificativa da posição</li>

            <li>alinhamento com o relatório gerado pela IA de People</li>

          </ul>

        </div>



        {/* PROCESSOS */}

        <div className="bg-gray-50 p-6 rounded-lg mb-8">

          <h3 className="font-semibold mb-3">
            ⚙ Processos
          </h3>

          <p className="mb-3">
            O time de People é responsável por:
          </p>

          <ul className="list-disc ml-6 space-y-1">

            <li>disponibilizar a IA de People</li>

            <li>manter os templates de vaga na Gupy</li>

            <li>revisar e aprovar as requisições de vaga</li>

          </ul>

          <p className="mt-4 mb-2">
            A aprovação da vaga passa por duas validações:
          </p>

          <ol className="list-decimal ml-6 space-y-2">

            <li>
              <strong>Business Partner</strong> — avalia a necessidade da posição
              considerando contexto da área e cenário do negócio.
            </li>

            <li>
              <strong>Supervisão de R&S</strong> — realiza a aprovação final
              considerando headcount e orçamento.
            </li>

          </ol>

        </div>



        {/* EXPECTATIVAS */}

        <div className="bg-gray-50 p-6 rounded-lg mb-8">

          <h3 className="font-semibold mb-3">
            ✔ Expectativas
          </h3>

          <ul className="list-disc ml-6 space-y-1">

            <li>utilizar a IA antes da abertura da vaga</li>

            <li>trazer clareza sobre o contexto da posição</li>

            <li>preencher corretamente as informações da vaga</li>

          </ul>

        </div>



        {/* OBSERVAÇÕES */}

        <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg mb-10">

          <h3 className="font-semibold mb-3">
            ⚠ Observações
          </h3>

          <ul className="list-disc ml-6 space-y-1">

            <li>
              O uso da IA de People é obrigatório antes da abertura da vaga.
            </li>

            <li>
              O relatório deve ser anexado na justificativa da vaga.
            </li>

            <li>
              R&S tem até 2 dias úteis para iniciar o processo após aprovação.
            </li>

            <li>
              Alterações devem ser feitas antes da publicação da vaga.
            </li>

          </ul>

        </div>



        {/* PRÓXIMA ETAPA */}

        <div className="flex justify-end">

          <Link
            href="/rs/alinhamento"
            className="bg-black text-white px-6 py-3 rounded-lg hover:opacity-80"
          >
            Próxima etapa → Alinhamento com People
          </Link>

        </div>

      </div>

    </main>
  );
}