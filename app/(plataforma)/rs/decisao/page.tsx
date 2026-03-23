import Link from "next/link";

export default function DecisaoPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex justify-center py-20">

      <div className="max-w-5xl w-full px-8">

        <Link
          href="/rs"
          className="text-gray-500 hover:text-gray-800 mb-8 inline-block"
        >
          ← Voltar para R&S
        </Link>

        <h1 className="text-4xl font-bold mb-4">
          Decisão e fechamento
        </h1>

        <p className="text-gray-500 mb-12">
          Após as entrevistas e avaliações, o líder e People tomam a decisão
          final sobre o candidato e conduzem a proposta e fechamento da vaga.
        </p>


        <div className="grid grid-cols-2 gap-4">

          <Link
            href="/rs/decisao/aula-1"
            className="bg-white border rounded-lg p-4 hover:shadow-sm transition"
          >
            Tomada de decisão da contratação
          </Link>

          <Link
            href="/rs/decisao/aula-2"
            className="bg-white border rounded-lg p-4 hover:shadow-sm transition"
          >
            Proposta e fechamento da vaga
          </Link>

        </div>

      </div>

    </main>
  );
}