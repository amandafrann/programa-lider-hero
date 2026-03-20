export default function AberturaPage() {
  return (
    <>
      <p className="text-gray-600 mb-10">
        Após utilizar a IA de People para estruturar a vaga, é hora de fazer a abertura da requisição na Gupy.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg mb-8">
        <h3 className="font-semibold mb-4">📋 Processo</h3>

        <ol className="list-decimal ml-6 space-y-4">

          <li>
            <strong>Acessar a Gupy</strong>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Vá em <strong>Gestão de vagas</strong></li>
              <li>Clique em <strong>+ Criar nova vaga</strong></li>
            </ul>
          </li>

          <li>
            <strong>Escolher o template da vaga</strong>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>
                Selecione o <strong>template correspondente à vaga</strong>:
                <ul className="list-disc ml-6 mt-1">
                  <li>Modelo de contratação (<strong>CLT ou PJ</strong>)</li>
                  <li><strong>Senioridade da posição</strong></li>
                </ul>
              </li>
              <li>
                Os demais campos <strong>já estarão preenchidos automaticamente</strong>
              </li>
              <li>Clique em <strong>Atualizar e continuar</strong></li>
            </ul>
          </li>

          <li>
            <strong>Descrição da vaga</strong>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Edite <strong>APENAS</strong> os campos necessários:</li>
              <ul className="list-disc ml-6 mt-1">
                <li><strong>Responsabilidades</strong></li>
                <li><strong>Requisitos</strong></li>
              </ul>
              <li>
                Os demais textos já estão <strong>padronizados pelo template</strong>
              </li>
              <li>
                Utilize o modelo padrão e edite apenas o campo <strong>"Sobre o desafio"</strong>
              </li>
            </ul>

            <div className="bg-white border border-gray-200 rounded-md p-4 mt-4 text-sm">
              <p className="mb-2">
                No campo <strong>"Sobre o desafio"</strong>, descreva de forma objetiva:
              </p>
              <ul className="list-disc ml-6 space-y-1">
                <li>O que a pessoa irá construir</li>
                <li>Qual impacto terá no time ou na empresa</li>
              </ul>

              <p className="mt-3">
                O objetivo é <strong>tornar a vaga mais atrativa para bons candidatos</strong>.
              </p>
            </div>

            <div className="bg-gray-100 border border-gray-200 rounded-md p-4 mt-4 text-sm">
              <p className="mb-2 font-medium">Template de referência:</p>

              <p className="mb-2">
                Ter um currículo compatível é importante, mas na <strong>Hero</strong> acreditamos que escolher um novo integrante do time vai muito além disso...
              </p>

              <p className="italic text-gray-600">
                (Utilize o template completo e edite apenas o trecho do desafio)
              </p>
            </div>

            <p className="mt-3">
              Após isso, clique em <strong>Atualizar e continuar</strong>.
            </p>
          </li>

          <li>
            <strong>Local de trabalho</strong>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Defina o modelo:</li>
              <ul className="list-disc ml-6 mt-1">
                <li>Remoto</li>
                <li>Híbrido</li>
                <li>Presencial</li>
              </ul>
              <li>Clique em <strong>Atualizar e continuar</strong></li>
            </ul>
          </li>

          <li>
            <strong>Dados internos</strong>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Preencha os campos:</li>
              <ul className="list-disc ml-6 mt-1">
                <li>Quantidade de vagas</li>
                <li>Faixa salarial</li>
                <li>Motivo da abertura</li>
                <li>Nome do recrutador</li>
                <li>Nome do gestor</li>
                <li>Justificativa</li>
              </ul>
            </ul>

            <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4 mt-4 text-sm">
              <strong>⚠️ Importante:</strong> Inclua aqui o <strong>relatório gerado pela IA de People</strong> (etapa de pré-abertura).
            </div>

            <p className="mt-3">
              Clique em <strong>Atualizar e continuar</strong>.
            </p>
          </li>

          <li>
            <strong>Aprovação da vaga</strong>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Defina <strong>Laura Pimenta</strong> como aprovadora</li>
              <li>Clique em <strong>Requisitar</strong></li>
            </ul>
          </li>

          <li>
            <strong>Vaga em aprovação</strong>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>A vaga entrará em fluxo de aprovação</li>
              <li>
                Após aprovação, o <strong>time de R&S entrará em contato</strong> para iniciar o processo
              </li>
            </ul>
          </li>

        </ol>
      </div>
    </>
  );
}