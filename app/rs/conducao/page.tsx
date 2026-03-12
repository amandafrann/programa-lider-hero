import Link from "next/link";

export default function ConducaoPage() {
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
          Condução do processo
        </h1>

        <p className="text-gray-500 mb-12">
          Nesta etapa, o líder participa ativamente do processo seletivo,
          conduz entrevistas e avalia candidatos em parceria com People.
        </p>


        <div className="grid grid-cols-2 gap-4">

          <Link
            href="/rs/conducao/aula-1"
            className="bg-white border rounded-lg p-4 hover:shadow-sm transition"
          >
            Conduzir entrevistas estruturadas
          </Link>

          <Link
            href="/rs/conducao/aula-2"
            className="bg-white border rounded-lg p-4 hover:shadow-sm transition"
          >
            Avaliação de candidatos
          </Link>

        </div>

      </div>

    </main>
  );
}