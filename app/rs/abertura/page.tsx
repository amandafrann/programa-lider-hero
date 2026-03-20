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

            {/* TOGGLE COMPLETO */}
            <details className="mt-4 bg-gray-100 p-4 rounded-md cursor-pointer">
              <summary className="font-medium">
                📄 Ver template de referência
              </summary>

              <div className="mt-4 text-sm space-y-4 leading-relaxed">

                <p>
                  Ter um currículo compatível é importante, mas na <strong>Hero</strong> acreditamos que escolher um novo integrante do time vai muito além disso. O que realmente buscamos é protagonismo, atitude e conexão com a nossa missão: <strong>transformar o futuro do trabalho independente 🚀</strong>
                </p>

                <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600">
                  Somos um time que aprende rápido, trabalha junto e transforma desafios em resultados. Valorizamos o respeito, a curiosidade e a força da diversidade, porque quando diferentes perspectivas se encontram, grandes ideias nascem!
                </blockquote>

                <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600">
                  Estamos em um momento único: dobrando de tamanho ano após ano, com um time de alto nível e conquistando cada vez mais espaço no mercado. Esse é o lugar certo para quem quer aprender muito, deixar sua marca e construir <strong>algo relevante de verdade 🖤</strong>
                </blockquote>

                <div>
                  <p className="font-medium mb-2">O que você vai encontrar aqui:</p>

                  <ul className="space-y-1">
                    <li>✨ Um ambiente <strong>colaborativo, diverso e dinâmico</strong>.</li>
                    <li>🚀 Muito espaço para <strong>autonomia, aprendizado e crescimento acelerado</strong>.</li>
                    <li>🌍 Oportunidade de participar da construção de um <strong>case de impacto real no mercado</strong>.</li>
                    <li>🏆 Uma empresa <strong>financeiramente sólida, premiada e reconhecida pelo mercado</strong>.</li>
                  </ul>
                </div>

                <div>
                  <p className="font-medium mt-4">Sobre o desafio:</p>

                  <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 mt-2">
                    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                  </blockquote>

                  <p className="text-gray-500 text-xs mt-2">
                    (LÍDER: escreva uma chamada atrativa que reflita o desafio da vaga e desperte interesse real no candidato)
                  </p>
                </div>

                <p className="mt-4">
                  👉 Quer fazer parte dessa história e deixar o seu legado? <strong>Vem ser Hero!!</strong>
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