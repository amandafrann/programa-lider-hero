// force deploy
import LessonLayout from "@/app/components/LessonLayout";

export default function AberturaPage() {
  return (
    <LessonLayout
      title="Abrir vaga na Gupy"
      backLink="/rs"
      sectionTitle="R&S"
      lessons={[
        {
          name: "Abrir vaga na Gupy",
          path: "/rs/abertura",
        },
        {
          name: "Alinhamento com R&S",
          path: "/rs/abertura/alinhamento",
        },
      ]}
    >

      <p className="text-gray-600 mb-10">
        Após utilizar a IA de People para estruturar a vaga,
        o próximo passo é realizar a abertura da requisição na Gupy.
      </p>

      {/* PROCESSO */}

      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg mb-8">

        <h3 className="font-semibold mb-3">
          📋 Processo
        </h3>

        <ol className="list-decimal ml-6 space-y-2 mb-6">

          <li>Acesse <strong>Gestão de vagas</strong></li>

          <li>Clique em <strong>Criar nova vaga</strong></li>

          <li>
            Selecione o template correspondente:
            <ul className="list-disc ml-6 mt-2">
              <li>modelo de contratação (CLT ou PJ)</li>
              <li>senioridade da posição</li>
            </ul>
          </li>

        </ol>

        <p className="font-semibold mb-2">
          Os demais campos serão preenchidos automaticamente pelo template.
        </p>

        <p>
          Depois disso, anexe o relatório gerado pela IA na seção de justificativa da vaga.
        </p>

      </div>


      {/* MATERIAL DE APOIO */}

      <div className="bg-gray-50 p-6 rounded-lg mb-8">

        <h3 className="font-semibold mb-3">
          📎 Material de apoio
        </h3>

        <p className="mb-4">
          Para consultar o passo a passo detalhado da abertura de vaga,
          acesse o POP interno da Hero.
        </p>

        <a
          href="https://www.notion.so/POP-Hero-Abertura-de-Requisi-o-de-Vaga-142ee12f65d7410cae1cf99907a8e0d1?pvs=21"
          target="_blank"
          className="text-blue-600 underline"
        >
          POP Hero | Abertura de Requisição de Vaga
        </a>

      </div>


      {/* COMPORTAMENTAL */}

      <div className="bg-gray-50 p-6 rounded-lg mb-8">

        <h3 className="font-semibold mb-4">
          🧠 Comportamental
        </h3>

        <ul className="list-disc ml-6 space-y-1">

          <li>Utilizar a IA de People antes de iniciar a requisição</li>

          <li>Consultar o material de abertura sempre que necessário</li>

          <li>Trazer clareza sobre o contexto da vaga</li>

          <li>Estar disponível para alinhamentos com People</li>

        </ul>

      </div>


      {/* PAPEL DO RH */}

      <div className="bg-gray-50 p-6 rounded-lg mb-8">

        <h3 className="font-semibold mb-4">
          👥 Papel do RH
        </h3>

        <p className="mb-4">
          O time de People garante que a requisição esteja alinhada
          com o contexto da empresa e as prioridades do negócio.
        </p>

        <p className="mb-4">
          Isso inclui revisar:
        </p>

        <ul className="list-disc ml-6 space-y-1">

          <li>contexto da área</li>

          <li>justificativa da posição</li>

          <li>alinhamento com relatório da IA</li>

        </ul>

      </div>


      {/* PROCESSOS PEOPLE */}

      <div className="bg-gray-50 p-6 rounded-lg mb-8">

        <h3 className="font-semibold mb-4">
          ⚙️ Processos
        </h3>

        <p className="mb-4">
          O time de People é responsável por:
        </p>

        <ul className="list-disc ml-6 space-y-1">

          <li>disponibilizar a IA de People</li>

          <li>manter templates de vaga</li>

          <li>revisar requisições de vaga</li>

        </ul>

        <p className="mt-4 mb-2 font-medium">
          A aprovação passa por duas validações:
        </p>

        <ol className="list-decimal ml-6 space-y-2">

          <li>
            <strong>Business Partner</strong>  
            avalia necessidade da posição considerando contexto do negócio.
          </li>

          <li>
            <strong>Supervisão de R&S</strong>  
            realiza aprovação final considerando headcount e orçamento.
          </li>

        </ol>

      </div>


      {/* EXPECTATIVAS */}

      <div className="bg-gray-50 p-6 rounded-lg mb-8">

        <h3 className="font-semibold mb-3">
          🎯 Expectativas
        </h3>

        <ul className="list-disc ml-6 space-y-1">

          <li>utilizar a IA antes da abertura da vaga</li>

          <li>trazer clareza sobre contexto e necessidade</li>

          <li>preencher corretamente as informações da vaga</li>

        </ul>

      </div>


      {/* OBSERVAÇÕES */}

      <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg mb-10">

        <h3 className="font-semibold mb-3">
          ⚠ Observações
        </h3>

        <ul className="list-disc ml-6 space-y-1">

          <li>uso da IA de People é obrigatório antes da abertura</li>

          <li>relatório deve ser anexado na justificativa da vaga</li>

          <li>R&S inicia o processo em até 2 dias úteis após aprovação</li>

          <li>alterações devem ocorrer antes da publicação</li>

        </ul>

      </div>

    </LessonLayout>
  );
}