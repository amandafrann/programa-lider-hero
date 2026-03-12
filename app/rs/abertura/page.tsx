import Link from "next/link";

export default function AberturaPage() {
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
          Abertura e alinhamento
        </h1>

        <p className="text-gray-500 mb-12">
          Após o planejamento da vaga, o próximo passo é abrir a vaga no sistema
          de recrutamento e garantir que o processo seletivo comece corretamente.
        </p>


        <div className="grid grid-cols-2 gap-4">

          <Link
            href="/rs/abertura/aula-1"
            className="bg-white border rounded-lg p-4 hover:shadow-sm transition"
          >
            Abrir vaga no sistema
          </Link>

          <Link
            href="/rs/abertura/aula-2"
            className="bg-white border rounded-lg p-4 hover:shadow-sm transition"
          >
            Definir etapas do processo seletivo
          </Link>

        </div>

      </div>

    </main>
  );
}