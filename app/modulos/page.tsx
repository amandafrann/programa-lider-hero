import Link from "next/link";

export default function Modulos() {
  return (
    <main className="min-h-screen bg-gray-50 flex">

      {/* SIDEBAR */}

      <aside className="w-80 bg-white border-r min-h-screen p-6">

        <Link
          href="/jornada"
          className="text-gray-500 hover:text-gray-800 text-sm"
        >
          ← Voltar para jornada
        </Link>

        <h2 className="text-xl font-bold mt-8 mb-6">
          R&S para Líderes
        </h2>

        <div className="space-y-3">

          <Link
            href="/modulo-1"
            className="block bg-gray-100 p-4 rounded-lg hover:bg-gray-200"
          >
            Módulo 1 — Definir a vaga
          </Link>

          <Link
            href="/modulo-2"
            className="block bg-gray-100 p-4 rounded-lg hover:bg-gray-200"
          >
            Módulo 2 — Abrir a vaga
          </Link>

          <div className="bg-gray-100 p-4 rounded-lg opacity-60">
            Módulo 3 — Conduzir entrevistas 🔒
          </div>

          <div className="bg-gray-100 p-4 rounded-lg opacity-60">
            Módulo 4 — Tomada de decisão 🔒
          </div>

        </div>

      </aside>

      {/* CONTEÚDO */}

      <section className="flex-1 p-16">

        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Recrutamento & Seleção
        </h1>

        <p className="text-gray-500 text-lg max-w-2xl">
          Nesta trilha você aprenderá como executar corretamente os processos
          de recrutamento e seleção na Hero. Cada módulo representa uma etapa
          essencial da jornada de contratação.
        </p>

        <div className="mt-10 bg-white rounded-xl shadow p-8 max-w-3xl">

          <h3 className="text-xl font-semibold mb-4">
            Como utilizar esta trilha
          </h3>

          <p className="text-gray-600">
            Navegue pelos módulos no menu lateral. Cada módulo contém
            instruções práticas para líderes executarem corretamente
            os processos de contratação.
          </p>

        </div>

      </section>

    </main>
  );
}