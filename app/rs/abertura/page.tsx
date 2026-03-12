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
          Abertura da vaga
        </h1>

        <p className="text-gray-500 mb-12">
          Após o planejamento da vaga, o próximo passo é realizar a abertura da
          vaga na Gupy e garantir que o processo seletivo comece corretamente.
        </p>


        <div className="grid grid-cols-2 gap-6">

          <Link
            href="/rs/abertura/abrir-vaga"
            className="border rounded-xl p-6 hover:bg-gray-50 transition"
          >
            <h3 className="font-semibold mb-2">
              Abrir vaga na Gupy
            </h3>

            <p className="text-sm text-gray-600">
              Como abrir a requisição de vaga e utilizar os templates da empresa.
            </p>

          </Link>


          <Link
            href="/rs/abertura/alinhamento-people"
            className="border rounded-xl p-6 hover:bg-gray-50 transition"
          >
            <h3 className="font-semibold mb-2">
              Alinhamento com People
            </h3>

            <p className="text-sm text-gray-600">
              Como alinhar expectativas e garantir aprovação da vaga.
            </p>

          </Link>

        </div>

      </div>

    </main>
  );
}