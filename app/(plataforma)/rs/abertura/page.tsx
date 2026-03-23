import Link from "next/link";

export default function AberturaPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 flex justify-center py-20">

      <div className="max-w-5xl w-full px-6 space-y-10">

        {/* HEADER */}
        <div className="space-y-4">
          <span className="text-xs text-gray-500 tracking-wide">
            R&S • MÓDULO 2
          </span>

          <h1 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Abertura
          </h1>

          <div className="flex items-center gap-3 text-sm">
            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
              ⏱ 7 min
            </span>

            <span className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full">
              Em andamento
            </span>
          </div>
        </div>

        {/* INTRO */}
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
          <p className="text-gray-800">
            Após utilizar a IA de People para estruturar a vaga, é hora de fazer a abertura da requisição na Gupy.
          </p>
        </div>

        {/* PASSO 1 */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
          <h3 className="font-semibold text-lg text-gray-900 mb-4">
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
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
          <h3 className="font-semibold text-lg text-gray-900 mb-4">
            2. Selecionar o template da vaga
          </h3>

          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li>Modelo de contratação (<strong>CLT ou PJ</strong>)</li>
            <li><strong>Senioridade da posição</strong></li>
            <li>Os demais campos já estarão preenchidos automaticamente</li>
            <li>Clique em <strong>Atualizar e continuar</strong></li>
          </ul>

          <img
            src="https://i.imgur.com/JOVvXyE.png"
            className="rounded-xl border mt-6"
          />
        </div>

        {/* PASSO 3 */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
          <h3 className="font-semibold text-lg text-gray-900 mb-4">
            3. Descrição da vaga
          </h3>

          <p className="text-gray-700 mb-3">
            Edite <strong>APENAS</strong> os campos de <strong>Responsabilidades</strong> e <strong>Requisitos</strong>.
          </p>

          <p className="text-gray-600 mb-4">
            Os demais textos já estão padronizados pelo template.
          </p>

          <p className="font-medium text-gray-900 mb-2">
            Edite o campo <strong>"Sobre o desafio"</strong>:
          </p>

          <ul className="list-disc ml-6 space-y-2 text-gray-700 mb-6">
            <li>O que a pessoa irá construir</li>
            <li>Qual impacto terá no time ou na empresa</li>
          </ul>

          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 text-sm text-gray-800 mb-6">
            ⚠️ Essa parte é o que torna a vaga mais atrativa — capriche.
          </div>

          <details className="bg-gray-50 border border-gray-200 rounded-xl p-4 cursor-pointer">
            <summary className="font-medium text-gray-900">
              📄 Ver template de referência
            </summary>

            <div className="mt-4 text-sm space-y-4 text-gray-700">
              <p>
                Ter um currículo compatível é importante, mas na <strong>Hero</strong> acreditamos que escolher um novo integrante vai além disso...
              </p>

              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                Somos um time que aprende rápido...
              </blockquote>

              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                Estamos em um momento único...
              </blockquote>
            </div>
          </details>

        </div>

        {/* PASSO 4 */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
          <h3 className="font-semibold text-lg text-gray-900 mb-4">
            4. Local / Modelo de trabalho
          </h3>

          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li>Remoto</li>
            <li>Híbrido</li>
            <li>Presencial</li>
            <li>Clique em <strong>Atualizar e continuar</strong></li>
          </ul>

          <img
            src="https://i.imgur.com/DPqPQRt.png"
            className="rounded-xl border mt-6"
          />
        </div>

        {/* PASSO 5 */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
          <h3 className="font-semibold text-lg text-gray-900 mb-4">
            5. Dados internos
          </h3>

          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li>Quantidade de vagas</li>
            <li>Faixa salarial</li>
            <li>Motivo da abertura</li>
            <li>Nome do recrutador</li>
            <li>Nome do gestor</li>
            <li>Justificativa</li>
          </ul>

          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 text-sm text-gray-800 mt-6">
            ⚠️ Inclua o relatório gerado pela IA de People.
          </div>

          <img
            src="https://i.imgur.com/xBxHcj1.png"
            className="rounded-xl border mt-6"
          />
        </div>

        {/* PASSO 6 */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
          <h3 className="font-semibold text-lg text-gray-900 mb-4">
            6. Aprovação da vaga
          </h3>

          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li>Defina <strong>Laura Pimenta</strong> como aprovadora</li>
            <li>Clique em <strong>Requisitar</strong></li>
          </ul>

          <img
            src="https://i.imgur.com/TWdrfOc.png"
            className="rounded-xl border mt-6"
          />
        </div>

        {/* PASSO 7 */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
          <h3 className="font-semibold text-lg text-gray-900 mb-4">
            7. Vaga em aprovação
          </h3>

          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li>A vaga entrará em fluxo de aprovação</li>
            <li>Após aprovação, o time de R&S entrará em contato</li>
          </ul>

          <img
            src="https://i.imgur.com/gDjiOM1.png"
            className="rounded-xl border mt-6"
          />
        </div>

        {/* CTA FINAL */}
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 flex items-center justify-between">

          <div>
            <p className="font-semibold text-gray-900">
              Módulo finalizado!
            </p>
            <p className="text-sm text-gray-600">
              Continue avançando para a próxima etapa.
            </p>
          </div>

          <Link
            href="/rs/abertura/alinhamento"
            className="bg-pink-600 hover:bg-pink-700 text-white font-medium px-6 py-3 rounded-xl shadow-md transition"
          >
            Próxima etapa →
          </Link>

        </div>

      </div>
    </main>
  );
}