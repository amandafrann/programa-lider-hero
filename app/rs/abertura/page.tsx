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

      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg mb-8">
        <h3 className="font-semibold mb-3">📋 Processo</h3>

        <ol className="list-decimal ml-6 space-y-2">
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

        <p className="mt-4 font-semibold">
          Os demais campos serão preenchidos automaticamente pelo template.
        </p>

        <p className="mt-2">
          Depois disso, anexe o relatório gerado pela IA na justificativa da vaga.
        </p>
      </div>

    </LessonLayout>
  );
}