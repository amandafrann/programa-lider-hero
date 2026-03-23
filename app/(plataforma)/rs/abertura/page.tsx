import Link from "next/link";

export default function AberturaPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-gray-100 py-20 flex justify-center">

      <div className="max-w-5xl w-full px-6">

        {/* HEADER DO MÓDULO */}
        <div className="mb-12">

          <span className="text-xs text-gray-400 uppercase tracking-wide">
            R&S • Módulo 2
          </span>

          <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mt-2">
            Abertura:
          </h1>

          <div className="flex items-center gap-3 mt-4">
            <span className="text-sm bg-gray-100 px-3 py-1 rounded-full text-gray-600">
              ⏱ 7 min
            </span>

            <span className="text-sm bg-pink-100 text-pink-600 px-3 py-1 rounded-full">
              Em andamento
            </span>
          </div>

        </div>

        {/* INTRO DESTACADA */}
        <div className="bg-pink-50 border border-pink-100 rounded-2xl p-8 mb-12">
          <p className="text-gray-800 leading-relaxed text-lg">
            Após utilizar a IA de People para estruturar a vaga, é hora de fazer a abertura da requisição na Gupy:          </p>
        </div>

        {/* PASSOS */}
        <div className="space-y-12">

          {/* PASSO 1 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition">

            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              1. Acessar a Gupy
            </h3>

            <a
              href="https://companyhero.gupy.io/companies/"
              target="_blank"
              className="text-pink-600 font-medium underline"
            >
              Acessar Gupy
            </a>

            <ul className="list-disc ml-6 mt-4 space-y-2 text-gray-700">
              <li>Vá em <strong>Gestão de vagas</strong></li>
              <li>Clique em <strong>+ Criar nova vaga</strong></li>
            </ul>

            <div className="mt-6 grid md:grid-cols-2 gap-4">
              <img src="https://i.imgur.com/DPpCkH4.png" className="rounded-xl border" />
              <img src="https://i.imgur.com/eM90ZZs.png" className="rounded-xl border" />
            </div>

          </div>

          {/* PASSO 2 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition">

            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              2. Selecionar o template da vaga
            </h3>

            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>Modelo de contratação (<strong>CLT ou PJ</strong>)</li>
              <li><strong>Senioridade da posição</strong></li>
              <li>Campos já preenchidos automaticamente</li>
              <li>Clique em <strong>Atualizar e continuar</strong></li>
            </ul>

            <img
              src="https://i.imgur.com/JOVvXyE.png"
              className="rounded-xl border mt-6"
            />

          </div>

          {/* PASSO 3 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition">

            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              3. Descrição da vaga
            </h3>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 text-sm text-gray-800 mb-6">
              ⚠️ Edite apenas responsabilidades e requisitos, os demais textos já estão padronizados.
            </div>

            <p className="text-gray-700 mb-4">
              
            </p>

            <p className="font-medium text-gray-900 mb-2">
              Sobre o desafio:
            </p>

            <ul className="list-disc ml-6 space-y-2 text-gray-700 mb-6">
              <li>O que será construído</li>
              <li>Impacto no time</li>
            </ul>

            {/* BLOCO EXTRA (nível produto) */}
            <div className="bg-blue-50 border-l-4 border-blue-400 p-5 rounded-xl">
              <p className="font-medium text-gray-900">
                💡 Dica
              </p>

              <p className="text-gray-700 mt-2">
                Quanto mais concreto e claro, mais atrativa será sua vaga.
              </p>
            </div>

          </div>

          {/* PASSO 4 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition">

            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              4. Modelo de trabalho
            </h3>

            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>Remoto</li>
              <li>Híbrido</li>
              <li>Presencial</li>
            </ul>

            <img
              src="https://i.imgur.com/DPqPQRt.png"
              className="rounded-xl border mt-6"
            />

          </div>

          {/* PASSO 5 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition">

            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              5. Dados internos
            </h3>

            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>Quantidade de vagas</li>
              <li>Faixa salarial</li>
              <li>Motivo</li>
              <li>Recrutador</li>
              <li>Gestor</li>
              <li>Justificativa</li>
            </ul>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 text-sm text-gray-800 mt-6">
              ⚠️ IMPORTANTE: Inclua aqui o relatório da IA de People, realizado na etapa anterior.
            </div>

          </div>

          {/* PASSO 6 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition">

            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              6. Aprovação
            </h3>

            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>Selecionar aprovador</li>
              <li>Clicar em requisitar</li>
            </ul>

            <img
              src="https://i.imgur.com/TWdrfOc.png"
              className="rounded-xl border mt-6"
            />

          </div>

        </div>

        {/* FINAL (UX DE PRODUTO) */}
        <div className="mt-16 bg-white border border-gray-200 rounded-2xl p-8 flex items-center justify-between shadow-sm">

          <div>
            <p className="font-semibold text-gray-900">
              Módulo concluído?
            </p>
            <p className="text-gray-500 text-sm">
              Marque como finalizado e avance.
            </p>
          </div>

          <button className="bg-pink-500 text-white px-6 py-3 rounded-xl font-medium hover:bg-pink-600 transition">
            Marcar como concluído
          </button>

        </div>

      </div>

    </main>
  );
}