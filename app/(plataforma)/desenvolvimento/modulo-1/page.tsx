import Link from "next/link";

export default function Modulo1() {
  return (
    <div className="flex min-h-screen">

      <div className="w-72 border-r bg-white p-6">

        <Link
          href="/desenvolvimento"
          className="text-sm text-gray-500 mb-6 block hover:underline"
        >
          ← Voltar
        </Link>

        <h2 className="font-semibold text-lg mb-6">
          Desenvolvimento
        </h2>

        <div className="space-y-3">

          <Link
            href="/desenvolvimento/modulo-1/aula-1"
            className="block bg-black text-white px-4 py-3 rounded-lg"
          >
            Aula 1 — Cultura de Feedback
          </Link>

        </div>

      </div>

      <div className="flex-1 p-16">

        <h1 className="text-4xl font-bold mb-4">
          Módulo 1 — Feedback
        </h1>

        <p className="text-gray-600">
          Aprenda a conduzir feedbacks claros, estruturados
          e que realmente geram desenvolvimento.
        </p>

      </div>

    </div>
  );
}