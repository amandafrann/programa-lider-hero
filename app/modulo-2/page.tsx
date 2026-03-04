import Link from "next/link";

export default function Modulo2() {
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
          R&S para Líderes
        </h2>

        <div className="space-y-3">

          <Link
            href="/modulos"
            className="block bg-gray-100 px-4 py-3 rounded-lg hover:bg-gray-200"
          >
            Módulo 1 — Definir a vaga
          </Link>

          <Link
            href="/modulo-2"
            className="block bg-black text-white px-4 py-3 rounded-lg"
          >
            Módulo 2 — Abrir a vaga
          </Link>

          <div className="bg-gray-100 px-4 py-3 rounded-lg opacity-60">
            Módulo 3 — Conduzir entrevistas 🔒
          </div>

          <div className="bg-gray-100 px-4 py-3 rounded-lg opacity-60">
            Módulo 4 — Tomada de decisão 🔒
          </div>

        </div>
      </div>


      {/* CONTEÚDO */}
      <div className="flex-1 p-16 max-w-4xl">

        <h1 className="text-4xl font-bold mb-10">
          Módulo 2 — Abrir a vaga
        </h1>

        <p className="text-gray-600 mb-10">
          Após estruturar a necessidade da contratação utilizando o Agente Estratégico,
          o próximo passo é realizar a abertura da vaga na Gupy e iniciar o processo seletivo.
        </p>

        <div className="space-y-6">

          <Link
            href="/modulo-2/aula-1"
            className="block border p-6 rounded-xl hover:bg-gray-50 transition"
          >
            <h3 className="font-semibold text-lg">
              Aula 3 — Descrição da vaga
            </h3>

            <p className="text-gray-500 text-sm mt-2">
              Aprenda como estruturar corretamente a descrição da vaga antes da abertura no sistema.
            </p>
          </Link>


          <Link
            href="/modulo-2/aula-2"
            className="block border p-6 rounded-xl hover:bg-gray-50 transition"
          >
            <h3 className="font-semibold text-lg">
              Aula 4 — Abertura da vaga na Gupy
            </h3>

            <p className="text-gray-500 text-sm mt-2">
              Veja o passo a passo para abrir uma vaga corretamente na plataforma Gupy.
            </p>
          </Link>

        </div>

      </div>
    </div>
  );
}