import Link from "next/link";

export default function RSPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex justify-center py-20">

      <div className="max-w-5xl w-full px-8">

        <Link
          href="/jornada"
          className="text-gray-500 hover:text-gray-800 mb-8 inline-block"
        >
          ← Voltar para jornada
        </Link>

        <h1 className="text-4xl font-bold mb-4">
          Recrutamento & Seleção
        </h1>

        <p className="text-gray-500 mb-12">
          Aprenda como conduzir processos de recrutamento desde o planejamento
          da vaga até a decisão final de contratação.
        </p>

        <div className="grid grid-cols-2 gap-6">

          <Link
            href="/rs/planejamento"
            className="border rounded-xl p-6 hover:bg-gray-50 transition"
          >
            <h3 className="font-semibold mb-2">
              Planejamento da vaga
            </h3>

            <p className="text-sm text-gray-600">
              Definir necessidade, escopo da vaga e alinhamento com People.
            </p>
          </Link>


          <Link
            href="/rs/abertura"
            className="border rounded-xl p-6 hover:bg-gray-50 transition"
          >
            <h3 className="font-semibold mb-2">
              Abertura e alinhamento
            </h3>

            <p className="text-sm text-gray-600">
              Como abrir uma vaga e iniciar o processo seletivo.
            </p>
          </Link>


          <Link
            href="/rs/conducao"
            className="border rounded-xl p-6 hover:bg-gray-50 transition"
          >
            <h3 className="font-semibold mb-2">
              Condução do processo
            </h3>

            <p className="text-sm text-gray-600">
              Como conduzir entrevistas e avaliar candidatos.
            </p>
          </Link>


          <Link
            href="/rs/decisao"
            className="border rounded-xl p-6 hover:bg-gray-50 transition"
          >
            <h3 className="font-semibold mb-2">
              Decisão e fechamento
            </h3>

            <p className="text-sm text-gray-600">
              Tomada de decisão, proposta e fechamento da vaga.
            </p>
          </Link>

        </div>

      </div>

    </main>
  );
}