export default function AberturaPage() {
  return (
    <>
      <p className="text-gray-600 mb-10">
        Após utilizar a IA de People para estruturar a vaga, é hora de fazer a abertura da requisição na Gupy.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg mb-8">
        <h3 className="font-semibold mb-4">📋 Processo</h3>

        <ol className="list-decimal ml-6 space-y-8">

          {/* PASSO 1 */}
          <li>
            <strong>Acessar a Gupy</strong>

            <p className="mt-2">
              <a
                href="https://companyhero.gupy.io/companies/"
                target="_blank"
                className="text-blue-600 underline"
              >
                Acessar Gupy
              </a>
            </p>

            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Vá em <strong>Gestão de vagas</strong></li>
              <li>Clique em <strong>+ Criar nova vaga</strong></li>
            </ul>

            {/* IMAGENS */}
            <div className="mt-4 space-y-3">
              <img src="https://i.imgur.com/DPpCkH4.png" className="rounded-lg border" />
              <img src="https://i.imgur.com/eM90ZZs.png" className="rounded-lg border" />
            </div>
          </li>

          {/* PASSO 2 */}
          <li>
            <strong>Selecionar o template da vaga</strong>

            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Modelo de contratação (<strong>CLT ou PJ</strong>)</li>
              <li><strong>Senioridade da posição</strong></li>
              <li>Os demais campos já estarão preenchidos automaticamente</li>
              <li>Clique em <strong>Atualizar e continuar</strong></li>
            </ul>

            <img
              src="https://i.imgur.com/JOVvXyE.png"
              className="rounded-lg border mt-4"
            />
          </li>

          {/* PASSO 3 */}
          <li>
            <strong>Descrição da vaga</strong>

            <p className="mt-2">
              Edite <strong>APENAS</strong> os campos de <strong>Responsabilidades</strong> e <strong>Requisitos</strong>.
            </p>

            <p className="mt-2">
              Os demais textos já estão padronizados pelo template.
            </p>

            <p className="mt-4 font-medium">
              Edite o campo <strong>"Sobre o desafio"</strong>:
            </p>

            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>O que a pessoa irá construir</li>
              <li>Qual impacto terá no time ou na empresa</li>
            </ul>

            <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4 mt-4 text-sm">
              ⚠️ Essa parte é o que torna a vaga mais atrativa — capriche.
            </div>

            {/* TOGGLE */}
            <details className="mt-4 bg-gray-100 p-4 rounded-md cursor-pointer">
              <summary className="font-medium">
                📄 Ver template de referência
              </summary>

              <div className="mt-3 text-sm space-y-3">

                <p>
                  Ter um currículo compatível é importante, mas na <strong>Hero</strong> acreditamos que escolher um novo integrante vai muito além disso...
                </p>

                <p>
                  👉 Preencha o campo <strong>“Sobre o desafio”</strong> com um texto atrativo e claro.
                </p>

              </div>
            </details>

            <p className="mt-3">
              Clique em <strong>Atualizar e continuar</strong>.
            </p>
          </li>

          {/* PASSO 4 */}
          <li>
            <strong>Local / Modelo de trabalho</strong>

            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Remoto</li>
              <li>Híbrido</li>
              <li>Presencial</li>
              <li>Clique em <strong>Atualizar e continuar</strong></li>
            </ul>

            <img
              src="https://i.imgur.com/DPqPQRt.png"
              className="rounded-lg border mt-4"
            />
          </li>

          {/* PASSO 5 */}
          <li>
            <strong>Dados internos</strong>

            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Quantidade de vagas</li>
              <li>Faixa salarial</li>
              <li>Motivo da abertura</li>
              <li>Nome do recrutador</li>
              <li>Nome do gestor</li>
              <li>Justificativa</li>
            </ul>

            <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4 mt-4 text-sm">
              ⚠️ Inclua o relatório gerado pela IA de People.
            </div>

            <p className="mt-3">
              Clique em <strong>Atualizar e continuar</strong>.
            </p>

            <img
              src="https://i.imgur.com/xBxHcj1.png"
              className="rounded-lg border mt-4"
            />
          </li>

          {/* PASSO 6 */}
          <li>
            <strong>Aprovação da vaga</strong>

            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Defina <strong>Laura Pimenta</strong> como aprovadora</li>
              <li>Clique em <strong>Requisitar</strong></li>
            </ul>

            <img
              src="https://i.imgur.com/TWdrfOc.png"
              className="rounded-lg border mt-4"
            />
          </li>

          {/* PASSO 7 */}
          <li>
            <strong>Vaga em aprovação</strong>

            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>A vaga entrará em fluxo de aprovação</li>
              <li>Após aprovação, o time de R&S entrará em contato</li>
            </ul>

            <img
              src="https://i.imgur.com/gDjiOM1.png"
              className="rounded-lg border mt-4"
            />
          </li>

        </ol>
      </div>
    </>
  );
}