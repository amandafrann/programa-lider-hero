import Link from "next/link";

export default function PlanejamentoPage() {
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
          Planejamento da vaga
        </h1>

        <p className="text-gray-500 mb-12">
          Antes de iniciar um processo seletivo, o líder deve garantir clareza
          sobre a necessidade da contratação e alinhar expectativas com People.
        </p>


        <div className="grid grid-cols-2 gap-4">

          <Link
            href="/rs/planejamento/aula-1"
            className="bg-white border rounded-lg p-4 hover:shadow-sm transition"
          >
            Acionar Agente Estratégico
          </Link>

          <Link
            href="/rs/planejamento/aula-2"
            className="bg-white border rounded-lg p-4 hover:shadow-sm transition"
          >
            Alinhamento da vaga com People
          </Link>

        </div>

      </div>

    </main>
  );
}