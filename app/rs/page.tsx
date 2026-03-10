import Link from "next/link";

export default function RSPage() {
  return (
    <div className="flex min-h-screen">

      {/* SIDEBAR */}

      <div className="w-72 border-r bg-white p-6">

        <Link
          href="/jornada"
          className="text-sm text-gray-500 mb-6 block hover:underline"
        >
          ← Voltar para jornada
        </Link>

        <h2 className="font-semibold text-lg mb-6">
          Recrutamento & Seleção
        </h2>

        <p className="text-sm text-gray-500">
          Aprenda como conduzir processos de recrutamento e seleção
          de forma estruturada na Hero.
        </p>

      </div>


      {/* CONTEÚDO */}

      <div className="flex-1 p-16 max-w-4xl">

        <h1 className="text-4xl font-bold mb-4">
          Recrutamento & Seleção
        </h1>

        <p className="text-gray-600 mb-12">
          Nesta jornada você aprenderá como conduzir um processo
          de recrutamento desde a definição da vaga até o fechamento
          da contratação.
        </p>


        {/* BLOCOS */}

        <div className="grid grid-cols-2 gap-6">

          <Link
            href="/rs/temas/planejamento-vaga"
            className="bg-gray-100 p-6 rounded-xl hover:bg-gray-200 transition"
          >
            <h3 className="font-semibold mb-2">
              Planejamento da vaga
            </h3>

            <p className="text-sm text-gray-600">
              Entenda quando abrir uma vaga, como definir escopo
              e alinhar necessidades com People.
            </p>
          </Link>


          <Link
            href="/rs/temas/abertura-alinhamento"
            className="bg-gray-100 p-6 rounded-xl hover:bg-gray-200 transition"
          >
            <h3 className="font-semibold mb-2">
              Abertura e alinhamento
            </h3>

            <p className="text-sm text-gray-600">
              Como abrir uma vaga e garantir que o processo
              comece corretamente.
            </p>
          </Link>


          <Link
            href="/rs/temas/conducao-processo"
            className="bg-gray-100 p-6 rounded-xl hover:bg-gray-200 transition"
          >
            <h3 className="font-semibold mb-2">
              Condução do processo
            </h3>

            <p className="text-sm text-gray-600">
              Entenda o papel do líder e do RH durante
              o processo seletivo.
            </p>
          </Link>


          <Link
            href="/rs/temas/decisao-fechamento"
            className="bg-gray-100 p-6 rounded-xl hover:bg-gray-200 transition"
          >
            <h3 className="font-semibold mb-2">
              Decisão e fechamento
            </h3>

            <p className="text-sm text-gray-600">
              Como tomar decisões, fazer oferta e
              concluir o processo seletivo.
            </p>
          </Link>

        </div>

      </div>

    </div>
  );
}