import Link from "next/link";

export default function AberturaPage() {
  return (
    <div className="space-y-10">

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
      <div className="bg-pink-50 border border-pink-100 rounded-2xl p-6">
        <p className="text-gray-800">
          Após utilizar a IA de People para estruturar a vaga, é hora de fazer a abertura da requisição na Gupy.
        </p>
      </div>

      {/* CONTEÚDO (mantive seu padrão resumido aqui) */}
      <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
        <h3 className="font-semibold text-gray-900 mb-4">
          1. Acessar a Gupy
        </h3>

        <a
          href="https://companyhero.gupy.io/companies/"
          target="_blank"
          className="text-pink-600 font-medium underline"
        >
          Acessar Gupy
        </a>
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
  );
}