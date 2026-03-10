import Link from "next/link";

export default function FeedbackPage() {
  return (
    <div className="flex min-h-screen">

      {/* SIDEBAR */}

      <div className="w-72 border-r bg-white p-6">

        <Link
          href="/desenvolvimento"
          className="text-sm text-gray-500 mb-6 block hover:underline"
        >
          ← Voltar para desenvolvimento
        </Link>

        <h2 className="font-semibold text-lg mb-6">
          Gestão de Performance
        </h2>

        <div className="space-y-3">

          <Link
            href="/desenvolvimento/performance/feedback"
            className="block bg-black text-white px-4 py-3 rounded-lg"
          >
            Feedback
          </Link>

          <div className="bg-gray-100 px-4 py-3 rounded-lg opacity-60">
            Pulso
          </div>

          <div className="bg-gray-100 px-4 py-3 rounded-lg opacity-60">
            Calibração
          </div>

          <div className="bg-gray-100 px-4 py-3 rounded-lg opacity-60">
            1:1
          </div>

          <div className="bg-gray-100 px-4 py-3 rounded-lg opacity-60">
            Yellow Flag
          </div>

        </div>

      </div>


      {/* CONTEÚDO */}

      <div className="flex-1 p-16 max-w-4xl">

        <h1 className="text-4xl font-bold mb-4">
          Feedback
        </h1>

        <p className="text-gray-600 mb-10">
          Feedback é uma das ferramentas mais importantes de liderança.
          Ele permite alinhar expectativas, corrigir desvios rapidamente
          e apoiar o desenvolvimento contínuo das pessoas do time.
        </p>


        {/* OBJETIVO */}

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg mb-8">

          <h3 className="font-semibold mb-3">
            ⚡ Objetivo da etapa
          </h3>

          <p className="text-gray-700">
            Garantir que líderes saibam dar feedbacks claros,
            construtivos e acionáveis para desenvolver pessoas
            e melhorar continuamente a performance do time.
          </p>

        </div>


        {/* PAPEL DO LÍDER */}

        <div className="bg-gray-50 p-6 rounded-lg mb-8">

          <h3 className="font-semibold mb-4">
            👤 Papel do líder
          </h3>

          <ul className="list-disc ml-6 text-gray-700 space-y-1">

            <li>Observar comportamentos e resultados do time</li>
            <li>Dar feedbacks próximos ao momento em que ocorrem</li>
            <li>Alinhar expectativas de forma transparente</li>
            <li>Apoiar o desenvolvimento das pessoas</li>

          </ul>

        </div>

      </div>

    </div>
  );
}